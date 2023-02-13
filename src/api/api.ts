import axios, { AxiosRequestConfig } from "axios";
import { getStorageUser } from "../common/user/userStorage";

const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Authorization: getStorageUser(),
  },
};

export const API = axios.create(axiosConfig);
