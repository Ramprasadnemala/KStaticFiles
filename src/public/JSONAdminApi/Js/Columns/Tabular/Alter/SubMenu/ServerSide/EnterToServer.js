import { jFUpdateFunc } from "./EnterToServer/Addlisteners.js";
import { jFCreateFoldersToDom } from "./EnterToServer/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
