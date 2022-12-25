import { GoPrimitiveDot } from "react-icons/go";

type props = {
    dotColor:string
}

export const DotLevel = ({dotColor}:props) => {
    return (
      <span>
        <GoPrimitiveDot fill={dotColor} className="w-5 h-5" id="dot_color" />
      </span>
    );
}