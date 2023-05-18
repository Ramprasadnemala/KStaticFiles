import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";

const StartFunc = () => {
    let jVarLocalLoginModalButtonId = document.getElementById("LoginModalButtonId");

    jVarLocalLoginModalButtonId.addEventListener("click", jFLocalLoginButtonClick);

    let jVarLocalNavBarloginId = document.getElementById("NavBarloginId");

    jVarLocalNavBarloginId.addEventListener("click", StartFuncCheckLogin);


    let jVarLocalNavBarlogoutId = document.getElementById("NavBarloginId");

    jVarLocalNavBarlogoutId.addEventListener("click", jfLocalCheckout);


};

const jFLocalLoginButtonClick = () => {
    let jVarLocalObject = {};

    jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
        jVarLocalCheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });
    };
};

const jVarLocalCheckUserNamePassword = async ({ inUserName, inPassword }) => {
    let jVarLocalPathArray = window.location.pathname.split("/");

    let jVarLocalUserCheckRoute = jVarLocalPathArray[1];
    let jVarLocalFetchUrl = `/${jVarLocalUserCheckRoute}/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie`;

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassWord: inPassword })
    });
    let FetchDataJson = await response.json();

    if (FetchDataJson !== null) {
        if (FetchDataJson.KTF) {
            var myModalEl = document.getElementById('LoginModalId');

            var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

            modal.hide();

            jFLocalFirmDetails({ inUserName, inFirmDetails: FetchDataJson });
            window.location.href = "";
            // this.Login.ClientSideCookieFuncs.CheckToken();
        } else {
            document.getElementById("KUserNameInput").classList.add("is-invalid");
        };
    };
};

const jFLocalFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};

let jfLocalCheckout = () => {
    LocalDeleteCookie({ inTokenName: "KToken" })
    StartFuncCheckLogin();

};

let LocalDeleteCookie = ({ inTokenName }) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};
StartFunc();