import { ButtonClickFunc as ButtonClickFuncDeleteDataFuncs } from './ButtonClickFuncs/DeleteDataFuncs.js';

let StartFunc = () => {
    let jVarLocalDeleteClass = document.getElementsByClassName("DeleteClass");

    for (let i = 0; i < jVarLocalDeleteClass.length; i++) {
        jVarLocalDeleteClass[i].addEventListener("click", ButtonClickFuncDeleteDataFuncs)
    };
};

export { StartFunc };
