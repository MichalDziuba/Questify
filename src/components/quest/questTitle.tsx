import { firstLetterUppercase } from "../../features/text/firstLetterUppercase"

type props = {
    text: string;
}
export const QuestTitle = ({ text }: props) => {
    return <p className="text-xl text-center">{firstLetterUppercase( text)}</p>
}