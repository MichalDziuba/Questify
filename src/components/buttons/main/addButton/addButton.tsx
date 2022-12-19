import { FC } from "react";
type props = {
    text: string,
    fn: () => void;
}

 export const AddButton: FC<props> = ({text,fn}) => {
    return (
        <button className="w-12 h-12 rounded-full bg-orange text-3xl text-white fixed bottom-10 right-10"
            onClick={fn}
        >
           {text}
        </button>
    )
}
