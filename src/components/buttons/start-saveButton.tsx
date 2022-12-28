import { FiSave } from "react-icons/fi";
type saveStartButtonProps = {
  isQuestNew: boolean;
  isQuestChallenge: boolean;
}
export const ButtonStartSave = ({
  isQuestNew,
  isQuestChallenge,
}: saveStartButtonProps) => {
  return (
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
        <FiSave
          className={` w-5 h-5 duration-50 ease-in-out ${
            isQuestChallenge ? "text-white" : "text-black"
          }`}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Save"
        />
      )}
    </button>
  );
};