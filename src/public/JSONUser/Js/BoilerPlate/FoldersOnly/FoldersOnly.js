// import { jFStartFunc, jFCheckToken } from "./ForLogin/AddListeners.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let ModalId = "LoginModalId";
let TokenName = "KUMAToken";

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

    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data);
};

let jFDeleteCookie = () => {
    let jVarLocalTokenName = TokenName;
    //document.cookie = "KAToken=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;";
    document.cookie = `${jVarLocalTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let jFShowModal = () => {
    localStorage.removeItem("kUserName");
    localStorage.removeItem("FirmDetails");
    jFDeleteCookie();

    let jVarLocalId = ModalId;
    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

// jFStartFunc({ inTokenName: TokenName });

// if (jFCheckToken({ inTokenName: TokenName })) {
//     await jFShowData();
//     let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

//     jVarLocalSetupButtonClass.forEach(box => {
//         box.addEventListener('click', jFSetup);
//     });
// } else {
//     jFShowModal();
// };



// import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
// import { StartFunc as StartAddlisteners } from "./Addlisteners/StartFuncs.js";

let StartFunc = async () => {
    let PromiseData = await StartFuncAdminData();
  
    if (PromiseData) {
        await jFShowData();
        let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

        jVarLocalSetupButtonClass.forEach(box => {
            box.addEventListener('click', jFSetup);
        });
    };
};

StartFunc().then();
