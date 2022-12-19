import { FC, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Backdrop from "@mui/material/Backdrop";
import QuestForm from "../forms/questForm/questForm";
import { VscEdit } from "react-icons/vsc";
import { QuestLevel } from "./questLevel";
import { QuestCategory } from "./questCategory";
import { QuestTitle } from "./questTitle";
import { QuestDate } from "./questDate";

export type questType = {
  _id: string;
  title: string;
  category: string;
  level: string;
  date: string;
  isChallenge: boolean;
};

const Quest: FC<questType> = ({
  level,
  title,
  date,
  category,
  _id,
  isChallenge,
}: questType) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (e: React.SyntheticEvent) => {
    console.log(level, title, date, category, _id, isChallenge);
    setOpen(!open);
  };

  return (
    <>
      <div
        className="shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-72 h-64 flex flex-col justify-around bg-white rounded-2xl font-Montserrat"
        id={_id}
      >
        <div className="max-w-sm  flex flex-row justify-between mr-2 ml-2 ">
          <QuestLevel level={level} />
          <button>
            <VscEdit className="fill-azure w-5 h-5" onClick={handleEdit} />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <QuestTitle text={title} />
          <QuestDate date={date} />
        </div>
        <QuestCategory category={category} />
      </div>
      {open && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          className="w-screen h-screen"
        >
          <QuestForm
            closeModalFn={handleClose}
            questCategory={category}
            questLevel={level}
            questTitle={title}
            isQuestNew={false}
            questDate={date}
            isChallenge={isChallenge} //deleted !
            id={_id}
          />
        </Backdrop>
      )}
    </>
  );
};
export default Quest;
