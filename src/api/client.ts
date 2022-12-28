import axios from "axios";
import { getLocalStorageToken } from "../features/localStorage/localStorageData";

export const apiClient = axios.create({
  baseURL: "https://questify.onrender.com/",
});
const token = getLocalStorageToken();

export const headers = {
  Authorization: `Bearer ${token}`,
};
