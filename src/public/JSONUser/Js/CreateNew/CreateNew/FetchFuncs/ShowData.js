let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Users/Api/ShowUsers`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        LocalShowDataFunc({ inData: data.JSONObject });
    };
};

let PullLoginDetailsFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Users/Api/ShowData`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    return await data;
};

let PullUserDetailsFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Users/Api/ShowUsers`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        return await data.JSONObject;
    };
};


export {  PullLoginDetailsFunc, PullUserDetailsFunc };