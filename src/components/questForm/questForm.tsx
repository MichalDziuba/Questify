import dayjs, { Dayjs } from "dayjs";
import React, { FC, useState } from "react";
import { AiFillStar, AiOutlineDelete, AiTwotoneTrophy } from "react-icons/ai";
import Calendar from "../callendar/callendar";
import { GoPrimitiveDot } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  actionAddQuest,
  actionDeleteQuest,
  actionEditQuest,
} from "../../app/actions";
import { formatDate } from "../../features/date/date";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Backdrop } from "@mui/material";
import { height } from "@mui/system";

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
};

type QuestFormProps = {
  closeModalFn: () => void;
  questLevel?: string;
  questCategory?: string;
  questTitle?: string;
  questDate?: string;
  isQuestNew: boolean;
  isChallenge: boolean;
  id: string;
};
export type deleteQuestData = {
  owner: string;
  id: string;
};
const QuestForm: FC<QuestFormProps> = ({
  closeModalFn,
  questCategory,
  questLevel,
  questTitle,
  isQuestNew,
  questDate = "",
  isChallenge,
  id,
}) => {
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
  const [dotColor, setDotColor] = useState(getDotColor(questLevel!));
  const userEmail = useAppSelector((state) => state.app.userEmail);
  const [isQuestChallenge, setQuestChallenge] = useState(isChallenge);
  const [modalDeleteOpen, setModalOpen] = useState(false);
  const handleChallenge = async (e: React.SyntheticEvent) => {
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
    };
    const dataPayload: editQuestPayload = {
      owner: userEmail,
      id: id,
      data,
    };
    dispatch(actionEditQuest(dataPayload));
    closeModalFn();
  };
  const handleDelete = async (e: React.SyntheticEvent) => {
    e.preventDefault();
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
      className={`w-72 h-72 rounded-2xl  flex flex-col justify-around items-center font-Montserrat relative  text-black ${
        isQuestChallenge ? "bg-deepblue " : "bg-white "
      }`}
    >
      <form
        id="questForm"
        className="w-full h-[80%] flex flex-col-reverse items-center justify-between"
        onSubmit={isQuestNew ? handleSubmit : handleEdit}
      >
        <div className="flex justify-between w-full flex-row">
          <select
            name="categories"
            onChange={handleChangeCategories}
            className="bg-[#B9C3C8] p-1 rounded-r-xl"
            defaultValue={questCategory}
          >
            <option value="stuff">STUFF</option>
            <option value="family">FAMILY</option>
            <option value="health">HEALTH</option>
            <option value="learning">LEARNING</option>
            <option value="leisure">LEISURE</option>
            <option value="work">WORK</option>
          </select>

          <div className="flex w-4/12 justify-between font-medium mr-3">
            {!isQuestNew && (
              <>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="  transition
    duration-50
    ease-in-out"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title={`Delete ${isQuestChallenge ? "challenge" : "quest"}!`}
                >
                  <AiOutlineDelete
                    className={`w-5 h-5 ${
                      isQuestChallenge ? "text-white" : "text-black"
                    }`}
                  />
                </button>{" "}
                <span className="text-gray text-lg">|</span>
              </>
            )}
            <button
              className=" text-red-600 transition duration-50 ease-in-out"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Cancel"
              type="button"
              onClick={closeModalFn}
            >
              X
            </button>
            <span className="text-gray text-lg">|</span>
            <button className="text-azure" type="submit">
              {isQuestNew ? (
                <p
                  className=" duration-50 ease-in-out"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Start the new quest!"
                >
                  START
                </p>
              ) : (
                <IoCheckmarkDoneSharp
                  className="text-green-500 w-5 h-5 duration-50 ease-in-out"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Save"
                />
              )}
            </button>
          </div>
        </div>

        <Calendar
          dateValue={dateCalendar}
          setDateValue={setDateCalendar}
          isQuestChallenge={isQuestChallenge}
        />

        <input
          name="title"
          defaultValue={questTitle}
          maxLength={40}
          required
          placeholder={
            isQuestChallenge ? "Create a challange!" : "Create a new quest"
          }
          className={`border-b-2 border-azure text-azure placeholder:text-gray placeholder:text-center placeholder:text-base outline-0 text-lg w-10/12 ${
            isQuestChallenge ? "bg-deepblue" : "bg-white"
          }`}
        />
        <div className="flex w-full">
          <div className="flex w-full justify-around">
            <div className="flex w-9/12">
              <span>
                <GoPrimitiveDot
                  fill={dotColor}
                  className="w-5 h-5"
                  id="dot_color"
                />
              </span>
              <select
                id="difficult"
                name="difficult"
                onChange={handleChangeLevel}
                defaultValue={questLevel}
                className={
                  isQuestChallenge
                    ? "bg-deepblue text-white"
                    : "bg-white text-black"
                }
              >
                <option value="easy"> Easy</option>
                <option value="normal"> Normal</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <button onClick={handleChallenge}>
              {isQuestChallenge ? (
                <AiFillStar
                  className="fill-azure w-5 h-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Back to normal quest!"
                />
              ) : (
                <AiTwotoneTrophy
                  className="fill-azure w-5 h-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Make your quest a challenge!"
                />
              )}
            </button>
          </div>
        </div>
        {modalDeleteOpen && (
          <Backdrop
            sx={{
              color: "#ffff",
              justifyItems: "center",
              alignItems: "center",
              opacity: "1",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={modalDeleteOpen}
          >
            <div className="flex flex-col w-64 h-36 items-center justify-evenly border-solid border-2 bg-navyblue rounded duration-500 ease-in-out ">
              <h2 className="text-center text-lg">{`Do you want to delete this ${
                isQuestChallenge ? "challenge" : "quest"
              }?`}</h2>
              <ul className="flex justify-around w-9/12 text-lg">
                <li>
                  <button
                    className="w-12 h-8 border-2 border-solid bg-green-500 text-center"
                    onClick={handleDelete}
                  >
                    Yes
                  </button>
                </li>
                <li>
                  <button
                    className="w-12 h-8 border-2 border-solid bg-red-500"
                    onClick={() => setModalOpen(false)}
                  >
                    No
                  </button>
                </li>
              </ul>
            </div>
          </Backdrop>
        )}
      </form>
    </div>
  );
};
export default QuestForm;
