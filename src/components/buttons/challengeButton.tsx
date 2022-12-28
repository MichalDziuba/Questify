import { BsFillTrophyFill } from "react-icons/bs";
type challengeButtonProps = {
  handleToggleList: () => void;
  isListOpen: boolean;
}
export const ChallengeButton = ({
  handleToggleList,
  isListOpen,
}: challengeButtonProps) => {
  return (
    <button
      onClick={handleToggleList}
      className={`w-8 h-8  rounded-full  justify-center items-center bg-azure flex mr-2 ${
        isListOpen && "animate-pulse"
      }`}
    >
      <BsFillTrophyFill className="w-5 h-5 hover:scale-110 active:scale-110 " />
    </button>
  );
};