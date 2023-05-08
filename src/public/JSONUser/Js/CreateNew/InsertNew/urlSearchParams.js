let ReturnUserPK = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const UserPK = params.get("UserPK");

    return { UserPK };
};

export { ReturnUserPK }
