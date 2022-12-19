import { today, tomorrow } from "../../features/date/date";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
type props = {
  date: string;
};
export const QuestDate = ({ date }: props) => {
  let text;

  if (date === today) {
    text = (
      <p className="flex items-center justify-center">
        Today <MdOutlineLocalFireDepartment fill="#FF851C" size={20} />
      </p>
    );
  }
   else if (date === tomorrow) {
     console.log(date === tomorrow);
     text = "Tomorrow";
   } else {
     text = date;
   }
  return <div className="text-base text-gray">{text}</div>;
};
