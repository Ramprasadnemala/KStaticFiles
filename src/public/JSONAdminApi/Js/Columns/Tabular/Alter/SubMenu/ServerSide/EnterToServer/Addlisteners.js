let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalPickFrom = jVarLocalColsestTr.querySelector('[name="PickFrom"]');
    let jVarLocalActive = jVarLocalColsestTr.querySelector('[name="Active"]');
    let jVarLocalFolderNames = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="ColumnName"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocaljVarLocalValidateValue = jVarLocalActive.checked;
    let jVarLocaljVarLocalTypeValue = jVarLocalPickFrom.value;
    let jVarLocalFolderNamesValue = jVarLocalFolderNames.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    let BodyAsJson = {
        Active: jVarLocaljVarLocalValidateValue,
        PickFrom: jVarLocaljVarLocalTypeValue,
        FolderName:jVarLocalFolderNamesValue,
        FileName:jVarLocalFileNameValue,
        ItemName:jVarLocalItemNameValue,
        ColumnName:jVarLocalColumnNameValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ServerSide/EnterToServer";

    let response = await fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            DataAttribute: jVarLocalDataAttributeValue,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            console.log("jVarLocalNewLocation : ", jVarLocalNewLocation);
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };

    console.log("response : ", response.status);
};

export { jFUpdateFunc };