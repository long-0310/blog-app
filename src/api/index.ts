import axios, { AxiosRequestConfig } from "axios";
import { checkToken } from "../Types/checkToken";

const axiosInstance = axios.create({
  baseURL: "https://api.realworld.io/api",
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const accessToken = checkToken();
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Any status codse that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
});

export default axiosInstance;
