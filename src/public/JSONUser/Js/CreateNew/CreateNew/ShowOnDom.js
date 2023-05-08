import { PullLoginDetailsFunc, PullUserDetailsFunc } from "./FetchFuncs/ShowData.js";

let getCommon = (arr1, arr2) => {
    var common = [];                   // Array to contain common elements
    for (var i = 0; i < arr1.length; ++i) {
        for (var j = 0; j < arr2.length; ++j) {
            if (arr1[i] == arr2[j]) {       // If element is in both the arrays
                common.push(arr1[i]);        // Push to common array
            }
        }
    }

    return common;                     // Return the common elements
};

let StartFunc = async () => {
    let LocalFromPullLoginDetailsFunc = await PullLoginDetailsFunc();
    let LocalFromPullUserDetailsFunc = await PullUserDetailsFunc();

    let LocalCommonKeys = getCommon(Object.keys(LocalFromPullLoginDetailsFunc), Object.keys(LocalFromPullUserDetailsFunc));
   // console.log("sssssss : ", LocalCommonKeys, LocalFromPullLoginDetailsFunc);
    let LocalNewObject = {};
    LocalCommonKeys.forEach(element => {
        LocalNewObject[element] = LocalFromPullLoginDetailsFunc[element];
    });

    await LocalShowDataFunc({ inData: LocalNewObject });
};

let LocalShowDataFunc = async ({ inData }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    let jVarGlobalPresentViewData = inData;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
};

export { StartFunc };