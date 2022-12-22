import awardImage from "../../images/award.png";
import { BsArrowRight } from "react-icons/bs";
import { QuestDoneTitle } from "./questDoneTitle";
import { actionDeleteQuest } from "../../app/actions";
import { deleteQuestData } from "../questForm/questForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
type props = {
  _id: string;
  title: string;
};
export const QuestDone = ({ _id, title }: props) => {
    const userEmail = useAppSelector(state => state.app.userEmail);
    const dispatch = useAppDispatch();
    const deleteQuest = () => {
        const payloadData: deleteQuestData = {
            owner: userEmail,
            id: _id,
        };
        dispatch(actionDeleteQuest(payloadData));
    }
  return (
    <div className="shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-72 h-64 flex flex-col items-center justify-around rounded-2xl font-Montserrat bg-white">
      <h2 className="font-medium text-sm  cursor-default text-center w-60 break-all flex ">
        COMPLETED: &nbsp;
        <QuestDoneTitle text={title} />
      </h2>

      <img
        src={awardImage}
        alt="quest done"
        className="w-[144px] h-[124px]"
      ></img>

      <button className="text-gray flex text-center items-center hover:text-azure" onClick={deleteQuest}>
        Continue <BsArrowRight className="fill-azure w-5 h-5 ml-2" />
      </button>
    </div>
  );
};
