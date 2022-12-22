import { FC } from "react";
import Quest, { questType } from "../quest/quest";
import { QuestDone } from "../questDone/questDone";

type props = {
  title: string;
  items: questType[];
};

export const QuestList: FC<props> = ({ title, items }: props) => {
  return (
    <div className="flex flex-col w-[95%] pb-8">
      <p className="mt-4 mb-4 text-lg">{title}</p>
      <ul className="flex flex-col items-center w-full h-fit gap-4">
        {items.map((item) => {
          return (
            <li className="w-72 h-64" key={item._id}>
              {item.isDone ? (
                <QuestDone title={item.title} _id={item._id} />
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
  );
};
