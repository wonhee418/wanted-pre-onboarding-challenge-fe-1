import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getStorageUser } from "../common/user/userStorage";

const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const API = axios.create(axiosConfig);
API.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getStorageUser();
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
