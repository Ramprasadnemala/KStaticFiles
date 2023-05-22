const StartFunc = ({ inJVarTableFooter }) => {
    let jVarLocalRetTf = true;

    let jVarLocalDataSetObject;
    let jVarLocalHtmlNamesArray = inJVarTableFooter.querySelectorAll("[name]");

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        if (LoopItem.dataset.hasOwnProperty("keshavsoft")) {
            jVarLocalDataSetObject = JSON.parse(LoopItem.dataset.keshavsoft);
            if (jVarLocalDataSetObject.Validate) {
                if (LoopItem.classList.contains("is-invalid")) {
                    LoopItem.classList.remove("is-invalid");
                };

                switch (jVarLocalDataSetObject.Type) {
                    case "NotEmpty":
                        if (LoopItem.value === "") {
                            LoopItem.classList.add("is-invalid");
                            LoopItem.focus();
                            jVarLocalRetTf = false;
                        };

                        break;

                    default:
                        break;
                };
            };
        }
    });

    return jVarLocalRetTf;
};

export { StartFunc };