import { jFUpdateFunc } from "./KDataAttributes/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDataAttributes/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    
    jFUpdateFunc();
});
