import { jFStartFunc as jFStartFuncApplyClasses } from "./ApplyClasses.js";
import { StartFunc as StartAddlisteners } from "./Addlisteners/StartFuncs.js";

let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        LocalShowDataFunc({ inData: data.LoginData });
        jFStartFuncApplyClasses();
        StartAddlisteners();
    };
};

let LocalShowDataFunc = async ({ inData }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;
    let jVarGlobalPresentViewData = inData;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
};

export { StartFunc };