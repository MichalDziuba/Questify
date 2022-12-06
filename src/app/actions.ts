import { loginUser, registerUser, logoutUser, addNewQuest } from "./requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "@mui/material/styles/createTransitions";

export const actionLoginUser = createAsyncThunk(
    'auth/login',
    loginUser,
)
export const actionRegisterUser = createAsyncThunk(
    'auth/register',
    registerUser
)
export const actionLogoutUser = createAsyncThunk('auth/logout',
    logoutUser
)
export const actionAddQuest = createAsyncThunk('/items/add',
    addNewQuest
)