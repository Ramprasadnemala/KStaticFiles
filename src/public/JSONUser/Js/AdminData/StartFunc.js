import { StartFunc as StartFuncAddListeners } from "./AddListeners.js";
import { StartFunc as StartFuncCheckToken } from "./CheckToken.js";
// inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncCheckToken();

    if (jVarLocalFromCheck === false) {
        let localJsonDataFetch = await fetch('../Js/ConfigKeys.json');
        let ResponseJsonData = await localJsonDataFetch.json();

        let LocalSubRoute = ResponseJsonData.AdminSubRoute;
        let localinUserKey = ResponseJsonData.UserKey;
        let localinFirmKey = ResponseJsonData.FirmKey;
        let localinTokenName = ResponseJsonData.TokenName;
        let localinModalId = ResponseJsonData.ModalId;

        StartFuncAddListeners({
            inSubRoute: LocalSubRoute,
            inUserKey: localinUserKey,
            inFirmKey: localinFirmKey,
            inTokenName: localinTokenName,
            inModalId: localinModalId
        });
    };

    return await jVarLocalFromCheck;
};

// StartFunc().then();

export { StartFunc };
