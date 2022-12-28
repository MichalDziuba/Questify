import { GoPrimitiveDot } from "react-icons/go";

type dotLevelProps = {
  dotColor: string;
};

export const DotLevel = ({ dotColor }: dotLevelProps) => {
  return (
    <span>
      <GoPrimitiveDot fill={dotColor} className="w-5 h-5" id="dot_color" />
    </span>
  );
};