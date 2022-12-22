import { firstLetterUppercase } from "../../features/text/firstLetterUppercase";
type props = {
    text:string
}
export const QuestDoneTitle = ({ text }: props) => {
    const truncatedText =
      text.length > 20 ? `${text.substring(0, 17)}...` : text;
  
  return (
    <p
      className='break-all text-azure underline'
    >
      {firstLetterUppercase(truncatedText)}
    </p>
  );
};
