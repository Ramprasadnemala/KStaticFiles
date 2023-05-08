var $result = document.getElementById("result");

let jFLocalToTable = (zipEntry, inLoopIndex) => {
    let jVarLocalLi = document.createElement("tr");
    let jVarLocalTd1 = document.createElement("td");
    jVarLocalTd1.innerHTML = inLoopIndex;
    jVarLocalLi.appendChild(jVarLocalTd1);

    let jVarLocalTd = document.createElement("td");
    jVarLocalTd.innerHTML = zipEntry.name;
    jVarLocalLi.appendChild(jVarLocalTd);

    let jVarLocalTdDate = document.createElement("td");
    jVarLocalTdDate.innerHTML = zipEntry.date;
    jVarLocalLi.appendChild(jVarLocalTdDate);

    let jVarLocalTdDir = document.createElement("td");
    jVarLocalTdDir.innerHTML = zipEntry.dir;
    jVarLocalLi.appendChild(jVarLocalTdDir);

    if (zipEntry.dir === false) {
        let jVarLocalTdSize = document.createElement("td");
        jVarLocalTdSize.classList.add("text-end");

        jVarLocalTdSize.innerHTML = zipEntry._data.uncompressedSize;
        jVarLocalLi.appendChild(jVarLocalTdSize);
    };

    $result.appendChild(jVarLocalLi);
    inLoopIndex += 1;
};

const jFLocalhandleFile = (f) => {
    var $title = document.getElementById("FileNameId");
    $title.innerHTML = f.name;

    JSZip.loadAsync(f)
        .then(jFLocalloadAsyncThen, jFLocalloadAsyncThen2ndFunc);
};

const jFLocalloadAsyncThen = (zip) => {
    var $title = document.getElementById("FileNameId");

    let jVarLocalHtmld = "KTableBodyId";
    let jVarLocalKTableBodyId = document.getElementById(jVarLocalHtmld);
    let jVarLocalTr = jVarLocalKTableBodyId.querySelector("tr.table-primary");
    let jVarLocalDataset = jVarLocalTr.dataset;
    
    let jVarLocalPkNeeded = jVarLocalDataset.pk;

    if (Object.keys(zip.files).length > 0) {
        let jVarLocalZipKey = Object.keys(zip.files)[0].split("/")[0];

        if (jVarLocalZipKey === jVarLocalPkNeeded === false) {
            let jVarLocalSpan = document.createElement("span");
            jVarLocalSpan.classList.add("small");
            jVarLocalSpan.innerHTML = `The supplied zip file should be ${jVarLocalPkNeeded} only`;
            $title.appendChild(jVarLocalSpan);

            jVarLocalTr.classList.remove("table-primary");
            jVarLocalTr.classList.add("table-danger");
        
            return;
        };


        let jVarLoopIndex = 0;
        let jVarLocalSpan = document.createElement("span");
        jVarLocalSpan.classList.add("small");
        // jVarLocalSpan.innerHTML = " (loaded in " + (dateAfter - dateBefore) + "ms)";
        $title.appendChild(jVarLocalSpan);

        zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
            jFLocalToTable(zipEntry, jVarLoopIndex);
            jVarLoopIndex += 1;
        });
    };

};

const jFLocalloadAsyncThen2ndFunc = (e) => {
    let jVarLocalLi = document.createElement("tr");
    let jVarLocalTd1 = document.createElement("td");
    jVarLocalTd1.innerHTML = "Error reading " + f.name + ": " + e.message;
    jVarLocalLi.appendChild(jVarLocalTd1);

    $result.appendChild(jVarLocalLi);
};

const jFSelectChange = (evt) => {
    let jVarLocalEvent = evt;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;

    jFLocalChangeDom({ inCurrentTarget: jVarLocalCurrentTarget });

    // remove content
    $result.innerHTML = "";
    // be sure to show the results
    document.getElementById("result_block").classList.remove("hidden");
    document.getElementById("result_block").classList.add("show");

    var files = evt.target.files;

    if (files.length === 1) {
        //allow only file to upload............
        jFLocalhandleFile(files[0]);
    };
};

const jFLocalChangeDom = ({ inCurrentTarget }) => {
    let jVarLocalClosestTr = inCurrentTarget.closest("tr");
    let jVarLocalClosestTBody = inCurrentTarget.closest("tbody");

    for (var i = 0, row; row = jVarLocalClosestTBody.rows[i]; i++) {
        jVarLocalClosestTBody.rows[i].classList.remove("table-primary");
        jVarLocalClosestTBody.rows[i].classList.remove("table-danger");
    };

    jVarLocalClosestTr.classList.add("table-primary");
};
export { jFSelectChange };