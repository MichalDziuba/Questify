import { MdDone } from "react-icons/md";

type doneButtonProps = {
  openModalComplete: () => void;
};
export const ButtonDone = ({ openModalComplete }: doneButtonProps) => {
  return (
    <button
      data-bs-toggle="tooltip"
      data-bs-placement="right" 
      title="Set as completed! "
      className="mr-2 w-8 h-8 box-content border-solid border-2 border-azure transition duration-50 ease-in-out  rounded-full hover:scale-110 "
      onClick={openModalComplete}
    >
      <MdDone className="w-8 h-8 text-azure hover:scale-125" />
    </button>
  );
};
