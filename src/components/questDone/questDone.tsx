import awardImage from "../../images/award.png";
import { BsArrowRight } from "react-icons/bs";
import { actionDeleteQuest, actionEditQuest } from "../../app/actions";
import {
  deleteQuestData,
  editQuestPayload,
  formData,
} from "../questForm/questForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { QuestDoneTitle } from "./questDoneTitle";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SeparatorLine } from "../questForm/separatorLine";
type questDoneProps = {
  _id: string;
  title: string;
  category: string;
  date: string;
  isChallenge: boolean;
  level: string;
  isDone: boolean;
};
export const QuestDone = ({
  _id,
  title,
  category,
  date,
  isChallenge,
  level,
  isDone,
}: questDoneProps) => {
  const userEmail = useAppSelector((state) => state.app.userEmail);
  const dispatch = useAppDispatch();
  const deleteQuest = () => {
    const payloadData: deleteQuestData = {
      owner: userEmail,
      id: _id,
    };
    dispatch(actionDeleteQuest(payloadData));
  };
  const restoreQuest = () => {
    const data: formData = {
      title: title,
      level: level,
      category: category,
      date: date,
      isChallenge: isChallenge,
      isDone: false,
    };
    const dataPayload: editQuestPayload = {
      owner: userEmail,
      id: _id,
      data,
    };
    dispatch(actionEditQuest(dataPayload));
  };
  return (
    <div className="shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-questMobile h-questMobile md:h-questDefault md:w-questDefault flex flex-col items-center justify-around rounded-2xl font-Montserrat bg-white">
      <div className="flex flex-col w-11/12 justify-center items-center cursor-default">
        <QuestDoneTitle text={title} />
      </div>
      <img
        src={awardImage}
        alt="quest done"
        className="w-32 h-28 md:w-28 md:h-24"
      ></img>
      <div className="flex items-center justify-around w-9/12 md:w-11/12 text-base">
        <button
          className="flex text-center text-gray hover:text-azure "
          onClick={restoreQuest}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Restore to the list"
        >
          <RiArrowGoBackLine className="fill-azure w-5 h-5 mr-2" />
          Restore
        </button>
        <SeparatorLine />
        <button
          className="text-gray flex text-center items-center hover:text-azure"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Delete quest"
          onClick={deleteQuest}
        >
          Delete <BsArrowRight className="fill-azure w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};
