let LocalButtonClickFunc = async ({ inEvent, inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    let jVarLocalEvent = inEvent;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalUserName = jVarLocalDataset.username;
    let jVarLocalPassword = jVarLocalDataset.password;
    
    let LocalFromFetch = await LocalCheckCredentials({
        inUserName: jVarLocalUserName,
        inPassWord: jVarLocalPassword
    });

    if (LocalFromFetch.KTF) {
        LocalInsertToLocalStorage({
            inUserName: jVarLocalUserName, inFirmDetails: LocalFromFetch,
            inUserLocalStorageKey, inFirmDetailsLocalStorageKey
        });
        
        if ("RedirectPage" in LocalFromFetch) {
            window.open(LocalFromFetch.RedirectPage, '_newtab');
            //window.location.href = LocalFromFetch.RedirectPage;
        };
    };
};

let LocalInsertToLocalStorage = ({ inUserName, inFirmDetails, inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    localStorage.setItem(inUserLocalStorageKey, inUserName);
    localStorage.setItem(inFirmDetailsLocalStorageKey, JSON.stringify(inFirmDetails));
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

let StartFunc = ({ inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    var userSelection = document.querySelectorAll('.LoginButtonClass');
    
    for (let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener("click", async () => {
            await LocalButtonClickFunc({ inEvent: event, inUserLocalStorageKey, inFirmDetailsLocalStorageKey });
        });
    }
};

export { StartFunc }
