import { ButtonClickFunc as ButtonClickFuncUploadDataFuncs } from './ButtonClickFuncs/UploadDataFuncs.js';
import { jFSelectChange } from "../ReadZip.js";

let StartFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("UploadButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", ButtonClickFuncUploadDataFuncs)
    };

    let jVarLocalSelectFileClass = document.getElementsByClassName("SelectFileClass");

    for (let i = 0; i < jVarLocalSelectFileClass.length; i++) {
        jVarLocalSelectFileClass[i].addEventListener("change", jFSelectChange)
    };
};

export { StartFunc };
