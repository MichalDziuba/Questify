import { formData } from "../components/questForm/questForm";
import {
  deleteQuestData,
  editQuestPayload,
} from "../components/questForm/questForm";
import { questType } from "./../components/quest/quest";

import Notiflix from "notiflix";
import { apiClient } from "../api/client";
import {
  saveTokenToLocalStorage,
  addToLocalStorage,
  getLocalStorageToken,
} from "../features/localStorage/localStorageData";

export const loginUser = async (payload: object) => {
  try {
    const response = await apiClient.post("auth/login", payload);
    Notiflix.Notify.success(response.data.message);
    saveTokenToLocalStorage(response.data.data.token);
    addToLocalStorage("name", response.data.data.name);
    addToLocalStorage("email", response.data.data.email);
    return response.data.data;
  } catch (e) {
    Notiflix.Notify.failure("Email or password incorrect");
  }
};
export const registerUser = async (payload: object) => {
  try {
    const response = await apiClient.post("auth/register", payload);
    Notiflix.Notify.success(
      "You have successfully signed up! Now you can login!"
    );

    return response.data.data;
  } catch (error: any) {
    if (error?.response.status === 409) {
      Notiflix.Notify.failure(error?.response?.data?.message);
    } else {
      Notiflix.Notify.failure(
        "Something went wrong. Please check the data provided. Tip: Password must be at least 5 characters long"
      );
    }
  }
};
export const logoutUser = async (payload: string) => {
  try {
    await apiClient.post("auth/logout", payload, {
      headers: {
        Authorization: `Bearer ${payload}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
export const addNewQuest = async (payload: formData) => {
  const token = getLocalStorageToken();
  try {
    const response = await apiClient.post("items/", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { category, date, isChallenge, level, title, _id, isDone } =
      response.data.data;
    const quest: questType = {
      category: category,
      date: date,
      isChallenge: isChallenge,
      level: level,
      title: title,
      _id: _id,
      isDone: isDone,
    };

    return quest;
  } catch (e) {
    console.log(e);
  }
};
export const getAllQuests = async (payload: string) => {
  const response = await apiClient.get("items/", {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });

  try {
    const data = await response.data.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const editQuest = async (payload: editQuestPayload) => {
  const token = getLocalStorageToken();
  try {
    await apiClient.patch("items/", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return payload;
  } catch (e) {
    console.log(e);
  }
};
export const deleteQuest = async (payload: deleteQuestData) => {
  const token = getLocalStorageToken();
  try {
    await apiClient.delete("items/", {
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return payload;
  } catch (e) {
    console.log(e);
  }
};
