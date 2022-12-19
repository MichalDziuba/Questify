import {
  getLocalStorageName,
  getLocalStorageEmail,
} from "../features/localstorage/localstorageData";
import { getLocalStorageToken } from "../features/localstorage/localstorageData";

import {
  actionLoginUser,
  actionRegisterUser,
  actionLogoutUser,
  actionAddQuest,
  actionGetAllQuests,
  actionEditQuest,
  actionDeleteQuest,
} from "./actions";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { questType } from "../components/quest/quest";

export type AppState = {
  userToken: string;
  userName: string;
  userEmail: string;
  items: questType[];
  isLoading: boolean;
  status: string;
};

const initialState: AppState = {
  userToken: getLocalStorageToken() || "",
  userName: getLocalStorageName() || "",
  userEmail: getLocalStorageEmail() || "",
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
      state.userEmail = "";
      state.userName = "";
      state.userToken = "";
      state.items = [];
    })
    .addCase(actionLogoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.userEmail = "";
      state.userName = "";
      state.userToken = "";
      state.items = [];
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
      state.items.push(action.payload!);
      state.isLoading = false;
    })
    .addCase(actionGetAllQuests.pending, (state) => {
      state.status = "pending";
      //  state.isLoading = true;
    })
    .addCase(actionGetAllQuests.rejected, (state) => {
      state.items = [];
      state.userToken = "";
      state.userEmail = "";
      state.userName = "";
      localStorage.clear();
      // state.isLoading = false;
      state.status = "rejected";
    })
    .addCase(actionGetAllQuests.fulfilled, (state, action) => {
      state.items = action.payload;
      // state.isLoading = false;
    })
    .addCase(actionEditQuest.fulfilled, (state, action) => {
      const payloadData = action.payload;
      if (payloadData) {
        const questId = payloadData.id;
        const questData = payloadData.data;

        const quest = state.items.find((item) => item._id === questId);
        if (quest) {
          const questIndex = state.items.indexOf(quest);
          console.log(state.items[questIndex]);
          state.items[questIndex] = {
            ...state.items[questIndex],
            ...questData,
          };
        }
      }
    })
    .addCase(actionDeleteQuest.pending, (state) => {
      console.log("pending");
    })
    .addCase(actionDeleteQuest.rejected, (state) => {
      console.log("rejected");
    })
    .addCase(actionDeleteQuest.fulfilled, (state, action) => {
      const payloadData = action.payload;
      if (payloadData) {
        const questId = payloadData.id;
        const newItemsArray = state.items.filter(
          (item) => item._id !== questId
        );
        state.items = newItemsArray;
      }
    });
});
