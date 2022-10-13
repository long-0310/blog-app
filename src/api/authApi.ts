/** @format */

import axiosInstance from ".";
import { loginType } from "../Types/ArticlesType";
import { signUpType, userType } from "../Types/authType";

const authApi = {
  postUserLogin(loginData: loginType): Promise<userType> {
    return axiosInstance.post("users/login", loginData);
  },
  postSignUP(signUpData: signUpType): Promise<userType> {
    return axiosInstance.post("users", signUpData);
  },
};

export default authApi;
