let StartFunc = async ({ inHtmlSelect }) => {
    let jVarLocalSelectedFile = inHtmlSelect;
    let jVarLocalFromValidation = fileValidation(jVarLocalSelectedFile);

    if (jVarLocalFromValidation) {
        const formData = new FormData();
        formData.append("inFile", jVarLocalSelectedFile);

        let response = await fetch("/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck", {
            method: "post",
            body: formData
        }).catch((upError) => {
            console.log("upError ", upError);
        });

        if (response.status === 200) {
            Swal.fire({
                title: 'Data Uploaded Sucessfully..',
                confirmButtonText: 'ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = ""

                }
            })
        } else {
            Swal.fire('Data Not Uploaded')

        }

    };
    // let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    // jvarLocalJSONData.JsonReports = JSON.parse(jVarLocalFromFile);


};

let fileValidation = (file) => {
    // console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/x-zip-compressed") === false) {
        alert('Invalid file type');
        return false;
    };

    return true;
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