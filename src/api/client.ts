import { getLocalStorageToken } from "../features/localStorage/localstorageData";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://questify.onrender.com/",
});
const token = getLocalStorageToken();

export const headers = {
  Authorization: `Bearer ${token}`,
};
