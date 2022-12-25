import { getLocalStorageToken } from './../features/localstorage/localstorageData';
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://questify.onrender.com/",
  // baseURL: "https://questify.herokuapp.com/",
});
const token = getLocalStorageToken();

export const headers = {
  "Authorization":`Bearer ${token}`
}