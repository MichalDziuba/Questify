import { FC } from "react";
type props={
  text:string
}

export const GoButton: FC<props> = ({text}) => {
    return (
        <button
              className="rounded-full bg-orange w-14 h-14 font-Roboto text-xl text-white font-medium mt-8 absolute bottom-[-50px] "
              type="submit"
            >
              {text}
            </button>
    )
}
