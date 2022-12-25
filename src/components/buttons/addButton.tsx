import { FC } from "react";
type props = {
    text: string,
    fn: () => void;
}

 export const AddButton: FC<props> = ({text,fn}) => {
    return (
      <button
        className="w-12 h-12 rounded-full bg-orange text-3xl text-white fixed bottom-8 right-8 transition duration-150 ease-in-out"
        onClick={fn}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Add a new quest"
      >
        {text}
      </button>
    );
}
