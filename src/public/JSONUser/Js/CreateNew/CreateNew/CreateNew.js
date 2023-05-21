import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import { StartFunc as StartFuncButtonClicks } from "./ListenerFuncs/ButtonClicks.js";

let jVarGlobalAdminSubRoute = "JSONUser";

let StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncButtonClicks({
            inSubRoute: jVarGlobalAdminSubRoute
        });
    };
};

StartFunc().then();