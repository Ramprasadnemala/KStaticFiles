import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import { StartFunc as StartFuncButtonClicks } from "./ListenerFuncs/ButtonClicks.js";

let jVarGlobalTokenName = "KUMAToken";
let jVarGlobalUserKey = "KUMAUserName";
let jVarGlobalFirmKey = "FirmDetails";
let jVarGlobalModalId = "LoginModalId";
let jVarGlobalAdminSubRoute = "JSONUser";

let StartFunc = async () => {
    StartFuncAdminData({
        inSubRoute: jVarGlobalAdminSubRoute,
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });
    StartFuncButtonClicks({
        inSubRoute: jVarGlobalAdminSubRoute
    });


    // AddListenersPostShowDataStartFunc({
    //     inUserLocalStorageKey: jVarGlobalUserLocalStorageKey,
    //     inFirmDetailsLocalStorageKey: jVarGlobalFirmDetailsLocalStorageKey
    // });

};

StartFunc().then();