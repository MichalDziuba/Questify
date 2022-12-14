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
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Open challenges list "
      onClick={handleToggleList}
      className={`w-8 h-8  rounded-full  justify-center items-center bg-azure flex transition duration-150 ease-in-out mr-2 ${
        isListOpen && "animate-pulse"
      }`}
    >
      <BsFillTrophyFill className="w-5 h-5 hover:scale-110 active:scale-110 " />
    </button>
  );
};