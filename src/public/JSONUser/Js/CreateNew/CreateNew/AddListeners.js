import { StartFunc as AdminDataStartFunc } from "../../AdminData/AddListeners.js";
import { StartFunc as ButtonClicksStartFunc } from "./ListenerFuncs/ButtonClicks.js";

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    AdminDataStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
    ButtonClicksStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
};

export { StartFunc }
