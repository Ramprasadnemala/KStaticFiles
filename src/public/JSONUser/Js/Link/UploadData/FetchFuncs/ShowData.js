let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();
    console.log("data",data);

    if (data.KTF) {
        LocalShowDataFunc({ inData: data.LoginData });
    };
};

let LocalShowDataFunc = async ({ inData }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    Object.entries(inData).forEach(
        ([key, value]) => {
            if (("UserName" in value) === false) {

                value.RowClass = "table-primary";
                value.ShowInsertNew = true;

            };
        }
    );

    let jVarGlobalPresentViewData = inData;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
};

export { StartFunc };