import { questType } from "../../components/quest/quest";
import { parseDate } from "../date/date";

export const sortAscendingByDate = (array: questType[]) => {
   array.sort((a, b) => {
        const aDate = parseDate(a.date);
     const bDate = parseDate(b.date);
     return aDate.getTime() - bDate.getTime();
    })
     
}