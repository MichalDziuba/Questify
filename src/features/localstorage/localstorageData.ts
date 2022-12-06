
export const saveTokenToLocalStorage = (token:string) => {
   return localStorage.setItem("token", token);
}
export const getLocalStorageToken = () => {
   return localStorage?.getItem("token")
}
export const removeTokenFromLocalStorage = () => {
    return localStorage.removeItem("token")
}

export const addToLocalStorage = (key: string, value: string) => {
    return localStorage.setItem(key,value)
}
export const getLocalStorageEmail = () => {
    return localStorage.getItem("email");
}
export const getLocalStorageName = () => {
    return localStorage.getItem("name");
}