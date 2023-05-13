let ButtonClickFunc = async (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            StartFunc({ inJsonPk: jVarLocalDataset.jsonpk });

        }
    })

};

let StartFunc = async ({ inJsonPk }) => {
    let jVarLocalFetchUrl = `/JSONUser/Admin/UserFolder/FromUpload/ShowDatas`;
    let jFetchBody = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: inJsonPk
        })
    }

    let response = await fetch(jVarLocalFetchUrl, jFetchBody);

    switch (response.status) {
        case 200:

            let timerInterval
            Swal.fire({
                title: `${inJsonPk} Deleted Sucessfully !`,
                html: 'I will close in <b></b> milliseconds.',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            window.location.href = "";

            break;

        case 204:
            Swal.fire('Not Delete Data')
            break;
        default:
        // code block
    };
};

export { ButtonClickFunc };