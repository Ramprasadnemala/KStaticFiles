var $result = document.getElementById("result");

let jFLocalToTable = (relativePath, zipEntry, inLoopIndex) => {
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
    var dateAfter = new Date();
    let jVarLoopIndex = 0;
    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("small");
    // jVarLocalSpan.innerHTML = " (loaded in " + (dateAfter - dateBefore) + "ms)";
    $title.appendChild(jVarLocalSpan);

    zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
        jFLocalToTable(relativePath, zipEntry, jVarLoopIndex);
        jVarLoopIndex += 1;
    });
};

const jFLocalloadAsyncThen2ndFunc = (e) => {
    let jVarLocalLi = document.createElement("tr");
    let jVarLocalTd1 = document.createElement("td");
    jVarLocalTd1.innerHTML = "Error reading " + f.name + ": " + e.message;
    jVarLocalLi.appendChild(jVarLocalTd1);

    $result.appendChild(jVarLocalLi);
};

const jFStart = () => {
    let jFLocalHtmlId = "file";
    let jFLoalHtmlFile = document.getElementById("file");
    let jVarLocalCloneClassName = document.getElementsByClassName("SelectFileClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("change", jFSelectChange)
    };

    if (jFLoalHtmlFile === null === false) {
        jFLoalHtmlFile.addEventListener("change", (evt) => {
            // remove content
            $result.innerHTML = "";
            // be sure to show the results
            document.getElementById("result_block").classList.remove("hidden");
            document.getElementById("result_block").classList.add("show");

            var files = evt.target.files;
            for (var i = 0; i < files.length; i++) {
                jFLocalhandleFile(files[i]);
            }
        });
    };
};


const jFSelectChange = (evt) => {
    console.log("evt ", evt);
    // remove content
    $result.innerHTML = "";
    // be sure to show the results
    document.getElementById("result_block").classList.remove("hidden");
    document.getElementById("result_block").classList.add("show");

    var files = evt.target.files;

    if (files.length === 1) {
        //allow only file to upload............
        const formData = new FormData();
        console.log("ttttttttttt : ", files[0]);
        formData.append("inFile", files[0]);

    //    fetch("/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck", {
    //         method: "post",
    //         body: formData
    //     }).catch((upError) => {
    //         console.log("upError ", upError);
    //     });

       jFLocalhandleFile(files[0]);
    };


    // for (var i = 0; i < files.length; i++) {
    //     const formData = new FormData();

    //     formData.append("inFile", files[i]);

    //     fetch("/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck", {
    //         method: "post",
    //         body: formData
    //     }).catch((upError) => {
    //         console.log("upError ", upError);
    //     });

    //     jFLocalhandleFile(files[i]);
    // };
};

const jFUpLoadButtonClick = (evt) => {
    console.log("evt ", evt);
    // remove content
    $result.innerHTML = "";
    // be sure to show the results
    document.getElementById("result_block").classList.remove("hidden");
    document.getElementById("result_block").classList.add("show");

    var files = evt.target.files;

    if (files.length === 1) {
        //allow only file to upload............
        const formData = new FormData();
        console.log("ttttttttttt : ", files[0]);
        formData.append("inFile", files[0]);

        fetch("/JSONUser/Login/Users/Admin/ShowUsers/WithFolderCheck", {
            method: "post",
            body: formData
        }).catch((upError) => {
            console.log("upError ", upError);
        });

        jFLocalhandleFile(files[0]);
    };

};


export { jFSelectChange };