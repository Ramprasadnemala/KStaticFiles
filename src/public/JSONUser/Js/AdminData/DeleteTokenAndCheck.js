import { StartFunc as StartFuncCheckToken } from "./CheckToken.js";

let LocalDeleteCookie = ({ inTokenName }) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let StartFunc = async () => {
    let localJsonDataFetch = await fetch('../../Js/ConfigKeys.json');
    let ResponseJsonData = await localJsonDataFetch.json();

    let localinTokenName = ResponseJsonData.TokenName;

    LocalDeleteCookie({ inTokenName: localinTokenName });
    StartFuncCheckToken().then();
};

export { StartFunc }
