import { jFStartFunc as ColumnReOrderjFStartFunc } from "./ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/FromReturnData/SubTable/Footer`;
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    console.log("dataFromApi",dataFromApi);

    if (dataFromApi !== null) {
        ColumnReOrderjFStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }