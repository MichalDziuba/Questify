import { addToLocalStorage, getLocalStorageToken } from './../features/localstorage/localstorageData';
import { saveTokenToLocalStorage } from "../features/localstorage/localstorageData";
import Notiflix from "notiflix";
import { apiClient } from "../api/client";

export const loginUser = async (payload: object) => {
  try {
    const response = await apiClient.post("auth/login", payload);
    Notiflix.Notify.success(response.data.message);
      saveTokenToLocalStorage(response.data.data.token);
      addToLocalStorage("name", response.data.data.name);
      addToLocalStorage("email",response.data.data.email)
    return response.data.data;
  } catch (e) {
    Notiflix.Notify.failure("Email or password incorrect");
  }
};
export const registerUser = async (payload: object) => {
  try {
    const response = await apiClient.post("auth/register", payload);
    Notiflix.Notify.success(
      "You have successfully signed up! Now you can login!"
      );
     
    return response.data.data;
  } catch (error: any) {
    if (error.response.status === 409) {
      Notiflix.Notify.failure(error.response.data.message);
    } else {
      Notiflix.Notify.failure(
        "Something went wrong. Please check the data provided. Tip: Password must be at least 5 characters long"
      );
    }
  }
};
export const logoutUser = async (payload:string|null) => {
    
    try {
        await apiClient.post("auth/logout", payload, {
          headers: {
            "Authorization": `Bearer ${payload}`,
          },
        });
    } catch (e) {
    }
}
export const addNewQuest = async (payload: object) => {
  const token=getLocalStorageToken()
  try {
    await apiClient.post("items", payload, {
      headers: {
        "Authorization":`Bearer ${token}`
      }
    })
    
  } catch (e) {
    console.log(e)
  }
}