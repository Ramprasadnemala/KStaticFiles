let ButtonClickFunc = async (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;

    StartFunc({ inJsonPk: jVarLocalDataset.jsonpk });
};

let StartFunc = async ({ inJsonPk }) => {
    let jVarLocalFetchUrl = `/JSONUser/Login/Users/Admin/InsertData/FromUpload/${inJsonPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();
    // return data;
    console.log("response:",response);

    switch (response.status) {
        case 200:
            window.location = `/JSONUser/Html/Link/ToLive.html?Golive=true&jsonpk=${inJsonPk}`

            break;

        default:
            break;
    }
};

export { ButtonClickFunc };