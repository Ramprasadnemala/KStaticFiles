import { StartFunc as ShowOnHeaderStartFunc } from "./ShowOnHeader.js";

let LocalgetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let LocalDeleteCookie = ({ inTokenName }) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let StartFunc = async () => {
    let localJsonDataFetch = await fetch('../Js/ConfigKeys.json');
    let ResponseJsonData = await localJsonDataFetch.json();

    let LocalSubRoute = ResponseJsonData.AdminSubRoute;
    let localinUserKey = ResponseJsonData.UserKey;
    let localinFirmKey = ResponseJsonData.FirmKey;
    let localinTokenName = ResponseJsonData.TokenName;
    let localinModalId = ResponseJsonData.ModalId;

    // let localinUserKey = inUserKey;
    // let localinFirmKey = inFirmKey;
    // let localinTokenName = inTokenName;
    // let localinModalId = inModalId;

    let jVarLocalCookieValue = LocalgetCookie(localinTokenName);

    if (jVarLocalCookieValue === null) {
        localStorage.removeItem(localinUserKey);
        localStorage.removeItem(localinFirmKey);

        // document.getElementById('NavBarId').classList.add("bg-danger");
        // document.getElementById('NavBarId').classList.remove("bg-dark");

        LocalDeleteCookie({ inTokenName: localinTokenName });

        let jVarLocalId = localinModalId;

        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });
        myModal.show();
        return await false;
    } else {
        ShowOnHeaderStartFunc({ inUserKey: localinUserKey });

        let jVarLocalId = localinModalId;
        var myModalEl = document.getElementById(jVarLocalId);

        var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

        if ((modal === null) === false) {
            modal.hide();
        };
        return await true;
    };
};

export { StartFunc }
