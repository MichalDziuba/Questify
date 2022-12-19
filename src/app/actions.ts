import {
  loginUser,
  registerUser,
  logoutUser,
  addNewQuest,
  getAllQuests,
  editQuest
} from "./requests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const actionLoginUser = createAsyncThunk("auth/login", loginUser);
export const actionRegisterUser = createAsyncThunk(
  "auth/register",
  registerUser
);
export const actionLogoutUser = createAsyncThunk("auth/logout", logoutUser);
export const actionAddQuest = createAsyncThunk("/items/add", addNewQuest);
export const actionGetAllQuests = createAsyncThunk(
  "/items/getAll",
  getAllQuests
);
export const actionEditQuest = createAsyncThunk("/items/editQuest",
  editQuest,
)
