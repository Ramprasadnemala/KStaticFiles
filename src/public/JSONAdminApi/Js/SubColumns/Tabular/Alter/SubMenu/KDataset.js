import { jFUpdateFunc } from "./KDataset/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDataset/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    
    jFUpdateFunc();
});
