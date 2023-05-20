let StartFunc = ({ inUserKey }) => {
    console.log("inUserKey : ", inUserKey);
    let LocalUserName = localStorage.getItem(inUserKey);
    let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdDropDown").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById("HeaderUserIdDropDown").innerHTML =
                document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);

            document.getElementById('NavBarId').classList.remove("bg-danger");
            document.getElementById('NavBarId').classList.add("bg-dark");
        };
    };
};

export { StartFunc }
