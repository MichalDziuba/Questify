import { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import QuestForm, { editQuestPayload } from "../questform/questForm";
import { VscEdit } from "react-icons/vsc";
import { QuestLevel } from "./questLevel";
import { QuestCategory } from "./questCategory";
import { QuestTitle } from "./questTitle";
import { QuestDate } from "./questDate";
import { ButtonDone } from "../buttons/doneButton";
import { actionEditQuest } from "../../app/actions";
import { formData } from "../questform/questForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { height } from "@mui/system";
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
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalComplete,setOpenModalComplete]=useState(false)
  const handleClose = () => {
    setOpenModalEdit(false);
  };
  const userEmail = useAppSelector(state => state.app.userEmail);
  const dispatch=useAppDispatch()
  const handleEdit: () => void =  () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handleOpenModalComplete: ()=>void = () => {
    setOpenModalComplete(true)
  }
  const completeQuest = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: formData = {
      title: title,
      level: level,
      category: category,
      date: date,
      isChallenge: isChallenge,
      isDone: true,
    };
    const dataPayload: editQuestPayload = {
      owner: userEmail,
      id: _id,
      data,
    };
    dispatch(actionEditQuest(dataPayload));
  };

  return (
    <div className="relative">
      <div
        className={` shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-questMobile h-questMobile flex flex-col justify-around rounded-2xl font-Montserrat md:w-questDefault  md:h-questDefault ${
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
        <div className="flex justify-between">
          <QuestCategory category={category} />
          <ButtonDone openModalComplete={handleOpenModalComplete} />
        </div>
      </div>
      {openModalEdit && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openModalEdit}
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
      {openModalComplete && (
        <Backdrop
          sx={{
            color: "#fffff",
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={openModalComplete}
          className="rounded-2xl"
        >
          <div className="flex flex-col justify-around items-center w-11/12 h-4/5 text-azure">
            <p className="text-center text-lg">
              Do you want to set this {isChallenge ? "challange" : "quest"} as
              completed?
            </p>
            <div className="flex justify-around items-center w-full text-lg">
              <button
                className="text-white p-1 border-solid border-green-500 w-fit h-fit"
                onClick={completeQuest}
              >
                Yes
              </button>
              <button
                className="text-white p-1 border-solid border-red-600 w-fit h-fit"
                onClick={() => setOpenModalComplete(false)}
              >
                No
              </button>
            </div>
          </div>
        </Backdrop>
      )}
    </div>
  );
};
export default Quest;
