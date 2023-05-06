
let StartFunc = async () => {
    console.log("jjjjjjjjjjjjj");
    let jvarLocalJSONData = {};
    let jVarLocalSelectFileId = document.getElementById("SelectFileId");
    let jVarLocalSelectedFile = jVarLocalSelectFileId.files[0];
    let jVarFromValodation =fileValidation(jVarLocalSelectedFile);
    console.log("dssd",jVarFromValodation);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    jvarLocalJSONData.JsonReports = JSON.parse(jVarLocalFromFile);

};

let fileValidation = (file) => {
    // console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/x-zip-compressed") === false) {
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

export { StartFunc };