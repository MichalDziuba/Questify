import dayjs from "dayjs";

const date = dayjs();
 export const formatDate = (date: string) => {
   const [day, month, year] = date.split("/");
   return `${year}-${month}-${day}`;
};
export  const parseDate = (date: string) => {
  const [day, month, year] = date.split("/").map(Number);
  return new Date(year, month - 1, day);
};

export const today = date.format("DD/MM/YYYY");
export const tomorrow = date.add(1, "day").format("DD/MM/YYYY");
export const parsedToday = parseDate(today);
export const parsedTomorrow=parseDate(tomorrow)