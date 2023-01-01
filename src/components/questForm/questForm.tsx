import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import Calendar from "../calendar/calendar";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  actionAddQuest,
  actionDeleteQuest,
  actionEditQuest,
} from "../../app/actions";
import { formatDate } from "../../features/date/date";
import { DeleteModal } from "./deleteModal";
import { QuestDifficult } from "./questDifficult";
import { QuestCategory } from "./questCategory";
import { ChallengeQuestButton } from "../buttons/challenge-questButton";
import { QuestTitleInput } from "./questTitle";
import { DotLevel } from './questDotLevel';
import { SeparatorLine } from "./separatorLine";
import { ButtonCancel } from "../buttons/cancelButton";
import { ButtonDelete } from "../buttons/deleteButton";
import { ButtonStartSave } from "../buttons/start-saveButton";

export type editQuestPayload = {
  id: string;
  owner: string;
  data: formData;
};

export type formData = {
  title: string;
  date: string;
  isChallenge: boolean;
  level: string;
  category: string;
  isDone: boolean;
};

type QuestFormProps = {
  closeModalFn: () => void;
  questLevel: string;
  questCategory: string;
  questTitle: string;
  questDate: string;
  isQuestNew: boolean;
  isChallenge: boolean;
  id: string;
  isDone: boolean;
  stopPropagation: React.MouseEventHandler;
};
export type deleteQuestData = {
  owner: string;
  id: string;
};
const QuestForm = ({
  closeModalFn,
  questCategory,
  questLevel,
  questTitle,
  isQuestNew,
  questDate = "",
  isChallenge,
  id,
  isDone,
  stopPropagation,
}: QuestFormProps) => {
  const getDotColor = (level: string) => {
    switch (level) {
      case "easy":
        return "green";
      case "normal":
        return "#00D7FF";

      case "hard":
        return "red";
      default:
        return "green";
    }
  };
  const dispatch = useAppDispatch();
  const date = isQuestNew ? dayjs(new Date()) : dayjs(formatDate(questDate));
  const [dateCalendar, setDateCalendar] = useState<Dayjs | null>(dayjs(date));
  const [dotColor, setDotColor] = useState(getDotColor(questLevel));
  const userEmail = useAppSelector((state) => state.app.userEmail);
  const [isQuestChallenge, setQuestChallenge] = useState(isChallenge);
  const [modalDeleteOpen, setModalOpen] = useState(false);

  const handleChallenge = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setQuestChallenge(!isQuestChallenge);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & {
      title: { value: string };
      difficult: { value: string };
      categories: { value: string };
    };
    const dataQuest: formData = {
      title: target.title.value,
      level: target.difficult.value,
      category: target.categories.value,
      date: `${dateCalendar?.format("DD/MM/YYYY")}`,
      isChallenge: isQuestChallenge,
      isDone: isDone,
    };
    await dispatch(actionAddQuest(dataQuest));
    form.reset();
    closeModalFn();
  };
  const handleEdit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      difficult: { value: string };
      categories: { value: string };
    };
    const data: formData = {
      title: target.title.value,
      level: target.difficult.value,
      category: target.categories.value,
      date: `${dateCalendar?.format("DD/MM/YYYY")}`,
      isChallenge: isQuestChallenge,
      isDone: isDone,
    };
    const dataPayload: editQuestPayload = {
      owner: userEmail,
      id: id,
      data,
    };
    dispatch(actionEditQuest(dataPayload));
    closeModalFn();
  };
  const handleDelete: () => void = () => {
    const payloadData: deleteQuestData = {
      owner: userEmail,
      id: id,
    };
    dispatch(actionDeleteQuest(payloadData));
    setModalOpen(false);
  };
  const handleChangeLevel = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const option = e.currentTarget.value;
    setDotColor(getDotColor(option));
  };
  const handleChangeCategories = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const selectForm = e.currentTarget;
    const selectedOption = selectForm.value;
    if (selectedOption === "stuff") {
      selectForm.style.background = "#B9C3C8";
    }
    if (selectedOption === "family") {
      selectForm.style.background = "#FFE6D3";
    }
    if (selectedOption === "health") {
      selectForm.style.background = "#CDF7FF";
    }
    if (selectedOption === "learning") {
      selectForm.style.background = "#FFF6C0";
    }
    if (selectedOption === "leisure") {
      selectForm.style.background = "#F8D2FF";
    }
    if (selectedOption === "work") {
      selectForm.style.background = "#D3F6CE";
    }
  };

  return (
    <div
      onClick={stopPropagation}
      className={`w-72 h-72 rounded-2xl  flex flex-col justify-around items-center font-Montserrat relative  text-black ${
        isQuestChallenge ? "bg-deepBlue " : "bg-white "
      }`}
    >
      <form
        id="questForm"
        className="w-full h-[80%] flex flex-col-reverse items-center justify-between"
        onSubmit={isQuestNew ? handleSubmit : handleEdit}
      >
        <div className="flex justify-between w-full flex-row mb-4">
          <QuestCategory
            handleChangeCategories={handleChangeCategories}
            questCategory={questCategory}
          />

          <div className="flex w-4/12 justify-between font-medium mr-3">
            <ButtonCancel closeModalFn={closeModalFn} />
            {!isQuestNew && (
              <> <SeparatorLine />
                <ButtonDelete
                  isQuestChallenge={isQuestChallenge}
                  setModalOpen={setModalOpen}
                />
               
              </>
            )}
            <SeparatorLine />
            <ButtonStartSave
              isQuestNew={isQuestNew}
              isQuestChallenge={isQuestChallenge}
            />
          </div>
        </div>

        <Calendar
          dateValue={dateCalendar}
          setDateValue={setDateCalendar}
          isQuestChallenge={isQuestChallenge}
        />
        <QuestTitleInput
          isQuestChallenge={isQuestChallenge}
          questTitle={questTitle}
        />

        <div className="flex w-full">
          <div className="flex w-full justify-around">
            <div className="flex w-9/12">
              <DotLevel dotColor={dotColor} />
              <QuestDifficult
                handleChangeLevel={handleChangeLevel}
                isQuestChallenge={isQuestChallenge}
                questLevel={questLevel}
              />
            </div>

            <ChallengeQuestButton
              handleChallenge={handleChallenge}
              isQuestChallenge={isQuestChallenge}
            />
          </div>
        </div>
        {modalDeleteOpen && (
          <DeleteModal
            modalDeleteOpen={modalDeleteOpen}
            isQuestChallenge={isQuestChallenge}
            handleDelete={handleDelete}
            setModalOpen={setModalOpen}
          />
        )}
      </form>
    </div>
  );
};
export default QuestForm;
