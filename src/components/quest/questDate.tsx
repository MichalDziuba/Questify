import { today, tomorrow } from "../../features/date/date";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { AiOutlineFieldTime } from 'react-icons/ai';
import { GiSnail } from "react-icons/gi";
import { FaRegSadTear } from "react-icons/fa";
type props = {
  date: string;
};
export const QuestDate = ({ date }: props) => {
  let text;

  if (date === today) {
    text = (
      <p className="flex items-center justify-center">
        Today
        <MdOutlineLocalFireDepartment
          fill="#FF851C"
          size={20}
          className="ml-1"
        />
      </p>
    );
  }
    if (date === tomorrow) {
     text = (
       <p className="flex items-center justify-center">
         Tomorrow
         <AiOutlineFieldTime fill="#FF851C" size={20} className="ml-1" />
       </p>
     );
  } 
  if (date > tomorrow) {
     text = (
       <p className="flex items-center justify-center">
         {date} <GiSnail fill="#FF851C" size={20} className="ml-1" />
       </p>
     );
  }
  if (date < today) {
   
     text = (
       <p className="flex items-center justify-center">
         {date} <FaRegSadTear fill="#FF851C" size={20} className="ml-1" />
       </p>
     );
  }
  return <div className="text-base text-gray">{text}</div>;
};
