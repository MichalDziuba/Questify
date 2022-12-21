import { firstLetterUppercase } from "../../features/text/firstLetterUppercase"

type props = {
    text: string;
    isChallenge: boolean;
}
export const QuestTitle = ({ text,isChallenge }: props) => {
    return (
      <p
        className={`text-xl text-center break-all w-64 ${
          isChallenge ? "text-white" : "text-black"
        }`}
      >
        {firstLetterUppercase(text)}
      </p>
    );
}