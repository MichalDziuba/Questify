import { firstLetterUppercase } from "../../features/text/firstLetterUppercase"

type questTitleProps = {
  text: string;
  isChallenge: boolean;
};
export const QuestTitle = ({ text, isChallenge }: questTitleProps) => {
  return (
    <p
      className={`text-xl text-center break-all w-titleMobile md:w-titleDefault md:text-lg ${
        isChallenge ? "text-white" : "text-black"
      }`}
    >
      {firstLetterUppercase(text)}
    </p>
  );
};