import { parseDate, parsedToday, parsedTomorrow } from "../../features/date/date";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { AiOutlineFieldTime } from 'react-icons/ai';
import { GiSnail } from "react-icons/gi";
import { FaRegSadTear } from "react-icons/fa";
type questDateProps = {
  date: string;
};
export const QuestDate = ({ date }: questDateProps) => {
  let text;
  let icon;
  const parsedDate = parseDate(date);

  if (parsedDate.getTime() === parsedToday.getTime()) {
    icon = (
      <MdOutlineLocalFireDepartment fill="#FF851C" size={20} className="ml-1" />
    );
    text = "Today";
  }
  if (parsedDate.getTime() === parsedTomorrow.getTime()) {
    icon = <AiOutlineFieldTime fill="#FF851C" size={20} className="ml-1" />;
    text = "Tomorrow";
  }
  if (parsedDate.getTime() > parsedTomorrow.getTime()) {
    icon = <GiSnail fill="#FF851C" size={20} className="ml-1" />;
    text = date;
  }
  if (parsedDate.getTime() < parsedToday.getTime()) {
    icon = <FaRegSadTear fill="#FF851C" size={20} className="ml-1" />;
    text = date;
  }
  return (
    <div className="text-base text-gray">
      {" "}
      <p className="flex items-center justify-center">
        {text} {icon}
      </p>
    </div>
  );
};
