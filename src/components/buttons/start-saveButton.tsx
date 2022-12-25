import { IoCheckmarkDoneSharp } from "react-icons/io5";
type props = {
    isQuestNew:boolean
}
export const ButtonStartSave = ({isQuestNew}:props) => {
    
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
          <IoCheckmarkDoneSharp
            className="text-green-500 w-5 h-5 duration-50 ease-in-out"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Save"
          />
        )}
      </button>
    );
}