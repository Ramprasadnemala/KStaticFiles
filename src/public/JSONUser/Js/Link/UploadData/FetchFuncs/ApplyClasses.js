let jFStartFunc = () => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        jFLocalApplyClassesFromUrl({ inQueryParamsAsObject: jVarLocalQueryParams });
    } else {
        jFLocalApplyClasses();
    };
};


let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

let jFLocalApplyClasses = () => {
    const alert = bootstrap.Alert.getOrCreateInstance('#BookingInsertSuccessId');
    alert.close();
};

let jFLocalApplyClassesFromUrl = ({ inQueryParamsAsObject }) => {
    let localinJsonPk = inQueryParamsAsObject.Datapk;
    const bsAlert = new bootstrap.Alert('#BookingInsertSuccessId');
    let text = document.getElementById("std");

    text.innerHTML = `<strong>${localinJsonPk}</strong>`

};


export { jFStartFunc }