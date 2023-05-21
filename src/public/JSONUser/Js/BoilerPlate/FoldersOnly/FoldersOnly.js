import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import { StartFunc as StartFuncInsertSerial } from "./InsertSerial.js";

let jFSetup = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let LocalDataPK = jVarLocalCurrentTarget.dataset.pk;

    let jVarLocalUrl = `/JSONUser/Users/Api/Setup/FoldersOnly/${LocalDataPK}`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        var myModal = new bootstrap.Modal(document.getElementById('SetupModal'), {
            keyboard: false
        });
        window.location = "../BoilerPlate/FoldersOnly.html";

        myModal.show();
    };
};

let jFShowData = async () => {
    let jVarLocalUrl = "/JSONUser/Users/Api/ShowData";
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    StartFuncInsertSerial({ inData: data });

    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data);
};

let StartFunc = async () => {
    let PromiseData = await StartFuncAdminData();
    console.log("PromiseData : ", PromiseData);
    if (PromiseData) {
        await jFShowData();
        let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

        jVarLocalSetupButtonClass.forEach(box => {
            box.addEventListener('click', jFSetup);
        });
    };
};

StartFunc().then();
