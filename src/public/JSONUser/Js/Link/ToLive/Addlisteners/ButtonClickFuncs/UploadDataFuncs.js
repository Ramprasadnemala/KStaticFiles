let ButtonClickFunc = async (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;

    StartFunc({ inJsonPk: jVarLocalDataset.jsonpk });
};

let StartFunc = async ({ inJsonPk }) => {
    let jVarLocalFetchUrl = `/JSONUser/Login/Users/Admin/InsertData/FromUpload/${inJsonPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    return data;
};

export { ButtonClickFunc };