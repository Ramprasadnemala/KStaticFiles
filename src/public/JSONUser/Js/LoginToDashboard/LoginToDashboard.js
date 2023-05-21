import { StartFunc as ShowOnDomStartFunc } from "./ShowOnDom.js";
import { StartFunc as StartFuncAdminData } from "../AdminData/StartFunc.js";
import { StartFunc as AddListenersPostShowDataStartFunc } from "./AddListenersPostShowData.js";

let jVarGlobalUserLocalStorageKey = "kUserName";
let jVarGlobalFirmDetailsLocalStorageKey = "FirmDetails";

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncAdminData();

    if (jVarLocalFromCheck === true) {
        await ShowOnDomStartFunc();

        AddListenersPostShowDataStartFunc({
            inUserLocalStorageKey: jVarGlobalUserLocalStorageKey,
            inFirmDetailsLocalStorageKey: jVarGlobalFirmDetailsLocalStorageKey
        });
    };
};

StartFunc().then();