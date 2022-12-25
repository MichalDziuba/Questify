import { AiOutlineDelete } from "react-icons/ai";
type props = {
  isQuestChallenge: boolean;
  setModalOpen: (value: React.SetStateAction<boolean>) => void;
};
export const ButtonDelete = ({ isQuestChallenge, setModalOpen }: props) => {
  return (
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
        className={`w-5 h-5 ${isQuestChallenge ? "text-white" : "text-black"}`}
      />
    </button>
  );
};
