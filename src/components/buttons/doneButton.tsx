import { MdDone } from "react-icons/md";

type doneButtonProps = {
  openModalComplete: () => void;
};
export const ButtonDone = ({ openModalComplete }: doneButtonProps) => {
  return (
    <button
      className="mr-2 w-8 h-8 box-content border-solid border-2 border-azure  rounded-full hover:scale-110 "
      onClick={openModalComplete}
    >
      <MdDone className="w-8 h-8 text-azure hover:scale-125" />
    </button>
  );
};
