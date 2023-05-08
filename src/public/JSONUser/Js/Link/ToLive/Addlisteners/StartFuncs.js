import { ButtonClickFunc as ButtonClickFuncUploadDataFuncs } from './ButtonClickFuncs/UploadDataFuncs.js';

let StartFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("GoLiveButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", ButtonClickFuncUploadDataFuncs)
    };
};

export { StartFunc };
