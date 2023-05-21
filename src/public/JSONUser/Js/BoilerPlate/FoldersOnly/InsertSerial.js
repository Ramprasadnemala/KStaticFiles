let StartFunc = ({ inData }) => {
    let jVarLocalSerial = 1;

    Object.entries(inData).forEach(
        ([key, value]) => {
            value.Serial = jVarLocalSerial;
            jVarLocalSerial += 1;
        }
    );

};

export { StartFunc };
