export const userTokenMethod = (methodType, data) => {
    if(methodType === "set") {
        localStorage.setItem(("storeToken"), data);
    } else if(methodType === "get") {
        return localStorage.getItem("storeToken");
    } else if(methodType === "delete") {
        localStorage.removeItem("storeToken");
    }
};