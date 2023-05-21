import { StartFunc as AdminDataStartFunc } from "../../AdminData/AddListeners.js";

let LocalButtonClickFunc = async (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalUserName = jVarLocalDataset.username;
    let jVarLocalPassword = jVarLocalDataset.password;
    console.log("aaaaaaaaaaaa : ");
    let LocalFromFetch = await LocalCheckCredentials({
        inUserName: jVarLocalUserName,
        inPassWord: jVarLocalPassword
    });

    if (LocalFromFetch.KTF) {
        console.log("LocalFromFetch : ", LocalFromFetch);
        //  window.location.href = LocalFromFetch.RedirectPage;
    };
};

let LocalCheckCredentials = async ({ inUserName, inPassWord }) => {
    let jVarLocalFetchUrl = "/JSONApi/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie";

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassWord })
    });

    let FetchData = await response.json();
    return await FetchData;
};

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    AdminDataStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });

    // var userSelection = document.querySelectorAll('.LoginButtonClass');
    // console.log("userSelection : ", userSelection);
    // for (let i = 0; i < userSelection.length; i++) {
    //     userSelection[i].addEventListener("click", LocalButtonClickFunc);
    // }
};

export { StartFunc }
