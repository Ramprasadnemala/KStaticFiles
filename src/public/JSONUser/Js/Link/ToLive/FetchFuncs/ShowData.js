import { jFStartFunc as jFStartFuncApplyClasses } from "./ApplyClasses.js";

let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Admin/UserFolder/FromUpload/ShowDatas`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        LocalShowDataFunc({ inData: data.FolderData });
        jFStartFuncApplyClasses();
    };
};

let LocalShowDataFunc = async ({ inData }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    let jVarGlobalPresentViewData = inData;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
};

export { StartFunc };