import { StartFunc as CheckOnDomStartFunc } from "./CheckOnDom.js";
import { StartFunc as StartFuncDeleteTokenAndCheck } from "./DeleteTokenAndCheck.js";

let LocalFirmDetails = ({ inUserKey }) => {
    let LocalUserName = document.getElementById("KUserNameInput").value;

    localStorage.setItem(inUserKey, LocalUserName);
};

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalLoginButtonOnModalId = document.getElementById("LoginButtonOnModalId");

    if ((jVarLocalLoginButtonOnModalId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalLoginButtonOnModalId.addEventListener("click", async () => {
            await LocalButtonClickFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
        });
    };

    let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

    if ((jVarLocalHeaderLoginButtonId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalHeaderLoginButtonId.addEventListener("click", async () => {
            let jVarLocalId = inModalId;
            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        });
    };

    let jVarLocalHeaderUserIdDropDown = document.getElementById("HeaderUserIdDropDown");

    if ((jVarLocalHeaderUserIdDropDown == null) === false) { //Executes if variable is null OR undefined
        jVarLocalHeaderUserIdDropDown.addEventListener("click", StartFuncDeleteTokenAndCheck);
    };
};

let LocalButtonClickFunc = async ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let LocalFromDomFunc = await CheckOnDomStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName });
    
    if (LocalFromDomFunc.KTF) {
        LocalFirmDetails({ inUserKey });

        window.location.href = "";

        // CheckTokenStartFunc({ inUserKey, inFirmKey, inTokenName, inModalId });
    };
};

export { StartFunc }
