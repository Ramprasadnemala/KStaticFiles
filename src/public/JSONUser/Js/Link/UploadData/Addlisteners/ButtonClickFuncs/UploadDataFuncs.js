import { StartFunc as ShowOnDomStartFunc } from '../../ShowOnDom/ShowOnDom.js';
import { StartFunc as StartFuncZipFile } from './FileTypes/ZipFile.js';

let ButtonClickFunc = async (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget=jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr=jVarLocalCurrentTarget.closest("Tr");
    let jVarLocalFileSelect=jVarLocalClosestTr.querySelector(".SelectFileClass");
    console.log("aaaa",jVarLocalFileSelect);
    let jvarLocalJSONData = {};
    let jVarLocalSelectedFile = jVarLocalFileSelect.files[0];

    switch (jVarLocalSelectedFile.type) {
        case "application/x-zip-compressed":
            StartFuncZipFile();

            break;

        default:
            fileValidation(jVarLocalSelectedFile);
            let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
            jvarLocalJSONData.JsonReports = JSON.parse(jVarLocalFromFile);

            ShowOnDomStartFunc({ JsonData: jvarLocalJSONData });
            break;
    }


};

let fileValidation = (file) => {
    // console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/json") === false) {
        alert('Invalid file type');
        return false;
    }
};

let jVarLocalreadFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
};

export { ButtonClickFunc };