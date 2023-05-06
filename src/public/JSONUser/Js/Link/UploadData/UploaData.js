import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
import { StartFunc as StartAddlisteners } from "./Addlisteners/StartFuncs.js";

let StartFunc = async () => {
    StartFuncShowData().then((params) => {
        StartAddlisteners();
    });
};

StartFunc();
