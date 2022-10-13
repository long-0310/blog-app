/** @format */

import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import authApi from "../../api/authApi";
import { loginType } from "../../Types/ArticlesType";
import { createUser, signUpType, userType } from "../../Types/authType";
import {
  getUser,
  loginStart,
  logoutSuccess,
  logoutUser,
  signUpStart,
  signUpSuccess,
  loginFalse,
  signUpFalse,
} from "./authSlice";

function* handleLogin(action: PayloadAction<loginType>) {
  try {
    const res: userType = yield authApi.postUserLogin(action.payload);
    yield put(getUser(res));
    localStorage.setItem("access_token", res.user.token);
    toast.success("Login Success 🥳", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });
  } catch (error: any) {
    yield put(loginFalse());
    toast.error("Something went wrong in the login process 🙁 !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

function* handleSignUp(action: PayloadAction<signUpType>) {
  try {
    const res: createUser = yield authApi.postSignUP(action.payload);
    yield put(signUpSuccess(res));
    if (res.isGetSuccess) {
      toast.success("Signup success ! Please come back to login 🥳 !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    yield put(signUpFalse());
    toast.error("Something went wrong in the sign up process 🙁 !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

function* handleLogout(action: PayloadAction<loginType>) {
  const res = {
    isGetSuccess: false,
    user: {
      email: "",
      username: "",
      bio: "",
      image: "",
      token: "",
    },
  };
  try {
    localStorage.setItem("access_token", "");
    yield put(logoutSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
export function* authSaga() {
  yield takeLatest(loginStart.type, handleLogin);
  yield takeEvery(signUpStart.type, handleSignUp);
  yield takeEvery(logoutUser.type, handleLogout);
}
