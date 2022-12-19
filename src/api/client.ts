import { getLocalStorageToken } from './../features/localstorage/localstorageData';
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "https://questify.herokuapp.com/",
});
const token = getLocalStorageToken();

export const headers = {
  "Authorization":`Bearer ${token}`
}