import { questType } from "../quest/quest";
import { QuestList } from "../questList/questList";

type challengesListProps = {
  items: questType[];
};

export const ChallengesList = ({ items }: challengesListProps) => {
  return (
    <div className="w-11/12 mt-8 flex flex-col justify-center items-center  text-center">
      {items.length > 0 ? (
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl text-center">
            This is your challenges list! Focus on finishing everything!
          </h2>
          <p className="mt-4 ">
            If you want back to all quests list, click again a challenge button
            on right top.
          </p>
          <QuestList items={items} title="" />
        </div>
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl">
            Sorry, but u don't have any challenge right now. Edit quest as
            challenge or add a new one challenge to see it right here!
          </h2>
          <p className="mt-4 ">
            If you want back to all quests list, click again a challenge button
            on right top.
          </p>
        </div>
      )}
    </div>
  );
};
