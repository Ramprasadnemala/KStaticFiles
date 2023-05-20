import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
import { StartFunc as CheckTokenStartFunc } from "../../AdminData/CheckToken.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";


let localJsonDataFetch = await fetch('/JSONUser/Js/ConfigKeys.json');
let ResponseJsonData = await localJsonDataFetch.json();

// let jVarGlobalTokenName = "KUMAToken";
// let jVarGlobalUserKey = "KUMAUserName";
// let jVarGlobalFirmKey = "FirmDetails";
// let jVarGlobalModalId = "LoginModalId";
// let jVarGlobalAdminSubRoute = "JSONUser";

let StartFunc = async () => {
    AddListenersStartFunc({
        inSubRoute: ResponseJsonData.SubRoute,
        inUserKey: ResponseJsonData.UserKey,
        inFirmKey: ResponseJsonData.FirmKey,
        inTokenName: ResponseJsonData.TokenName,
        inModalId: ResponseJsonData.ModalId
    });

    CheckTokenStartFunc({
        inUserKey: ResponseJsonData.UserKey,
        inFirmKey: ResponseJsonData.FirmKey,
        inTokenName: ResponseJsonData.TokenName,
        inModalId: ResponseJsonData.ModalId
    });

    StartFuncShowData();
};

StartFunc();
