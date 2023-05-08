import { ReturnUserPK } from "../urlSearchParams.js";

let StartFunc = () => {
    let LocalFromUrlSearchParams = ReturnUserPK();
    let LocalDompk = document.getElementById("pk");

    if ((LocalFromUrlSearchParams.UserPK == null) === false) { //Executes if variable is null OR undefined
        LocalDompk.value = LocalFromUrlSearchParams.UserPK;
        let LocalFromDomUserName = document.getElementById("UserName");
        LocalFromDomUserName.focus();
    }

    let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");
    jVarLocalSaveButtonid.addEventListener("click", jFSave);
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    };

    return pairs;
};

let jFSave = async () => {
    var form = document.getElementById("kform1");
    let jVarLocalFetchPostData = serializeObject(form);
    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = "/JSONUser/Users/Api/Save/WithDataPk";
    let response = await fetch(jVarLocalUrl, jVarLocalSettings);
    let data = await response.json();

    if (data.KTF) {
        window.location = "../Customers/Show.html";
    } else {
        Swal.fire(
            data.KReason
        )
    };
    return data;
};

export { StartFunc };
