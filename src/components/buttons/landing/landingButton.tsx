import { FC } from "react";
type props = {
  title: string;
  fn: () => void;

};
const Button: FC<props> = ({ title,fn }) => {
  return (
    <button
      className="bg-orange rounded text-lg text-white font-medium font-Roboto
       w-32 h-8"
      onClick={fn}
    >
      {title}
    </button>
  );
};
export default Button;
