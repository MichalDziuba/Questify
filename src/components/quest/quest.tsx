import { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import QuestForm from "../questform/questForm";
import { VscEdit } from "react-icons/vsc";
import { QuestLevel } from "./questLevel";
import { QuestCategory } from "./questCategory";
import { QuestTitle } from "./questTitle";
import { QuestDate } from "./questDate";
import { GiTrophyCup } from "react-icons/gi";

export type questType = {
  _id: string;
  title: string;
  category: string;
  level: string;
  date: string;
  isChallenge: boolean;
  isDone: boolean;
};

const Quest: FC<questType> = ({
  level,
  title,
  date,
  category,
  _id,
  isChallenge,
  isDone,
}: questType) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit: () => Promise<void> = async () => {
    setOpen(!open);
  };


  return (
    <div>
      <div
        className={`relative shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-questMobile h-questMobile flex flex-col justify-around rounded-2xl font-Montserrat md:w-questDefault  md:h-questDefault ${
          isChallenge ? "bg-deepblue " : "bg-white "
        }`}
        id={_id}
      >
        <div className="max-w-sm  flex flex-row justify-between mr-2 ml-2 ">
          <QuestLevel level={level} />

          <button>
            <VscEdit
              className="fill-azure w-5 h-5 transition duration-50 ease-in-out"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={`Edit ${isChallenge ? "challenge" : "quest"}!`}
              onClick={handleEdit}
            />
          </button>
        </div>
        <div className="flex flex-col items-center ">
          
          <QuestTitle text={title} isChallenge={isChallenge} />
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
            isChallenge={isChallenge}
            id={_id}
            isDone={isDone}
          />
        </Backdrop>
      )}
    </div>
  );
};
export default Quest;
