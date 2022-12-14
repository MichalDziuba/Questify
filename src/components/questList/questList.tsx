import Quest, { questType } from "../quest/quest";
import { QuestDone } from "../questDone/questDone";

type questListProps = {
  title: string;
  items: questType[];
};
export const QuestList = ({ title, items }: questListProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[95%] max-lg:pb-10">
      <div className="flex flex-col w-full justify-center items-center flex-wrap">
        <div className="w-full flex justify-start">
          {" "}
          <p className="mt-4 mb-4 text-lg text-left">{title}</p>
        </div>
        <ul className="flex flex-col items-center justify-center gap-4 w-full flex-wrap md:flex-row md:justify-start ">
          {items.map((item) => {
            return (
              <li
                className="w-questMobile h-questMobile md:w-questDefault md:h-questDefault"
                key={item._id}
              >
                {item.isDone ? (
                  <QuestDone
                    category={item.category}
                    date={item.date}
                    isChallenge={item.isChallenge}
                    level={item.level}
                    title={item.title}
                    _id={item._id}
                    isDone={item.isDone}
                  />
                ) : (
                  <Quest
                    category={item.category}
                    date={item.date}
                    isChallenge={item.isChallenge}
                    level={item.level}
                    title={item.title}
                    _id={item._id}
                    isDone={item.isDone}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
