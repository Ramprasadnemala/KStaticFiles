let jFGetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let jFInHeader = () => {
    let LocalUserName = localStorage.getItem("kUserName");
    let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById("HeaderUserIdLi").innerHTML = LocalUserName
            //document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);
        };
    };
};

let jFCheckToken = ({ inTokenName = "KUMAToken" }) => {
    let jVarLocalCookieValue;
    //jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie("KAToken");
    let jVarLocalTokenName = inTokenName;

    jVarLocalCookieValue = jFGetCookie(jVarLocalTokenName);

    if (jVarLocalCookieValue === null) {
        return false;
    } else {
        jFInHeader();
        return true;
    };
};

let jFLoginCheck = async () => {
    let jVarLocalObject = {};
    let jVarReturnData;

    jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
        jVarReturnData = await jFCheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });

        if (jVarReturnData.KTF) {
            await jFShowData();
            //jVarLocalApiFuncs.ShowData();
        };
    };
};

let jFCheckUserNamePassword = async ({ inUserName, inPassword }) => {
    let jVarLocalFetchUrl = "/JSONUser/Admin/Api/InAdminDataJson/Check/TokenToCookie";

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassword })
    });

    if (response.status === 503) {
        let FetchDataText = await response.text();

        //if (confirm("click ok to continue")) window.location = "https://github.com/keshavsoft/JSONUser";

        if (confirm("Copy Project from Github Repo")) window.open("https://github.com/keshavsoft/JSONUser", "_blank");

        //alert(FetchDataText);
        return { KTF: false };
    };

    let FetchDataJson = await response.json();

    if (FetchDataJson !== null) {
        if (FetchDataJson.KTF) {
            var myModalEl = document.getElementById('LoginModalId');

            var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

            modal.hide();

            jFFirmDetails({ inUserName, inFirmDetails: FetchDataJson });
            jFCheckToken();
            return await FetchDataJson;
        } else {
            document.getElementById("KUserNameInput").classList.add("is-invalid")
        };
    };
};

let jFFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};

let jVarModalLoginButtonId = document.getElementById("ModalLoginButtonId");
jVarModalLoginButtonId.addEventListener("click", jFLoginCheck);

export { jFCheckToken }