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

let StartFunc = ({ inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalCookieValue = LocalgetCookie(inTokenName);

    if (jVarLocalCookieValue === null) {
        localStorage.removeItem(inUserKey);
        localStorage.removeItem(inFirmKey);

        document.getElementById('NavBarId').classList.add("bg-danger");
        document.getElementById('NavBarId').classList.remove("bg-dark");

       LocalDeleteCookie({ inTokenName });

        let jVarLocalId = inModalId;

        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });
        myModal.show();
    } else {
        ShowOnHeaderStartFunc({ inUserKey });

        let jVarLocalId = inModalId;
        var myModalEl = document.getElementById(jVarLocalId);

        var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
        
        if ((modal === null) === false) {
            modal.hide();
        };
    };
};

export { StartFunc };