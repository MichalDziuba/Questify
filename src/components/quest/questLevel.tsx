import { GoPrimitiveDot } from "react-icons/go"



type Props = {
  level: string;
 
};

export const QuestLevel = ({ level }: Props) => {
  let dotClass;
  switch (level) {
    case "easy":
      dotClass = "fill-green-500";
      break;
    case "normal":
      dotClass = "fill-[#00D7FF]";
      break;
    case "hard":
      dotClass = "fill-red-500";
      break;
  }

  return level ? (
    <div className="flex font-medium text-gray">
      <GoPrimitiveDot size={20} className={dotClass} />
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </div>
  ) : null;
};