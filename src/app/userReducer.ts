import {
  getLocalStorageName,
  getLocalStorageEmail,
} from "./../features/localstorage/localstorageData";
import { getLocalStorageToken } from "../features/localstorage/localstorageData";

import {
  actionLoginUser,
  actionRegisterUser,
  actionLogoutUser,
  actionAddQuest,
} from "./actions";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

type questType = {
  title: string;
  category: string;
  level: string;
  date: string;
  isDone: boolean;
  isChallenge: boolean;
};
type AppState = {
  userToken: null | string;
  userName: null | string;
  userEmail: null | string;
  items: questType[];
  isLoading: boolean;
  status: string;
};

const initialState: AppState = {
  userToken: null || `${getLocalStorageToken()}`,
  userName: null || `${getLocalStorageName()}`,
  userEmail: null || `${getLocalStorageEmail()}`,
  items: [],
  isLoading: false,
  status: "idle",
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionLoginUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(actionLoginUser.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(actionLoginUser.fulfilled, (state, action) => {
      state.userEmail = action?.payload?.email;
      state.userName = action?.payload?.name;
      state.userToken = action?.payload?.token;
      state.isLoading = false;
    })
    .addCase(actionRegisterUser.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    })
    .addCase(actionRegisterUser.rejected, (state) => {
      state.status = "rejected";
      state.isLoading = false;
    })
    .addCase(actionRegisterUser.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(actionLogoutUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(actionLogoutUser.rejected, (state) => {
      state.isLoading = false;
      state.userEmail = null;
      state.userName = null;
      state.userToken = null;
    })
    .addCase(actionLogoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.userEmail = null;
      state.userName = null;
      state.userToken = null;
    })
    .addCase(actionAddQuest.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    })
    .addCase(actionAddQuest.rejected, (state) => {
      state.status = "rejected";
      state.isLoading = false;
    })
    .addCase(actionAddQuest.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.items=[...state.items, action.payload]
    });
});
