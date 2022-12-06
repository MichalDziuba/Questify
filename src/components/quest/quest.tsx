import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
const Quest: FC = () => {

  return (
    <div className="bg-red-200 drop-shadow-xl w-72 h-64 flex flex-col mt-5 justify-around ">
      <div className="max-w-sm  flex flex-row justify-between mr-2 ml-2 ">
        <span>*Hard</span>
        <button>
          <AiFillStar className="fill-azure w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p>Visit the dentist at lumident</p>
        <div>Today,13:30</div>
      </div>
      <div>Health</div>
    </div>
  );
};
export default Quest;
