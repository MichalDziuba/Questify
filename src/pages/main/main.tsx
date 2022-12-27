import { FC, useEffect, useState } from "react";
import { AddButton } from "../../components/buttons/addButton";
import { Header } from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../../components/loading/loader";
import EmptyState from "../../components/emptystate/emptyState";
import Backdrop from "@mui/material/Backdrop";
import QuestForm from "../../components/questform/questForm";
import { actionGetAllQuests } from "../../app/actions";
import { questType } from "../../components/quest/quest";
import {
  parseDate,
  parsedToday,
  parsedTomorrow,
} from "../../features/date/date";
import { QuestList } from "../../components/questlist/questList";
import { sortAscendingByDate } from "../../features/sort/ascendingByDate";
import { ChallengesList } from "../../components/challengesList/challengesList";

const MainPage: FC = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const token = useAppSelector((state) => state.app.userToken);
  const items = useAppSelector((state) => state.app.items);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [isOpenChallengesList, setOpenChallengesList] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleToggleChallengesList = () => {
    setOpenChallengesList(!isOpenChallengesList);
  }

  const todayItems: questType[] = [];
  const tomorrowItems: questType[] = [];
  const nextDaysItems: questType[] = [];
  const unfulfilledItems: questType[] = [];
  const completedQuests: questType[] = [];
  const challenges: questType[] = [];

  items.forEach((item) => {
    const itemDate = parseDate(item.date);
    const today = parsedToday;
    const tomorrow = parsedTomorrow;
    if (item.isDone) {
      completedQuests.push(item);
    } else {
      if (item.isChallenge) {
        challenges.push(item);
      }
      if (itemDate.getTime() === today.getTime()) {
        todayItems.push(item);
      }
      if (itemDate.getTime() === tomorrow.getTime()) {
        tomorrowItems.push(item);
      }
      if (itemDate.getTime() > tomorrow.getTime()) {
        nextDaysItems.push(item);
      }
      if (itemDate.getTime() < today.getTime()) {
        unfulfilledItems.push(item);
      }
    }
  });
  sortAscendingByDate(nextDaysItems);
  sortAscendingByDate(unfulfilledItems);
  sortAscendingByDate(completedQuests);
  sortAscendingByDate(challenges);

  useEffect(() => {
    dispatch(actionGetAllQuests(token));
  }, [dispatch, token]);

  return (
    <div className=" min-h-screen h-fit bg-darkwhite pb-8">
      <Header isOpenChallengesList={isOpenChallengesList} openChallengesList={handleToggleChallengesList} />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="relative flex flex-col flex-wrap  items-center font-Montserrat max-w-screen min-w-screen ">
          {isOpenChallengesList ? (
            <ChallengesList items={challenges} />
          ) : (
            <>
              {items.length > 0 ? (
                <>
                  {unfulfilledItems.length > 0 && (
                    <QuestList items={unfulfilledItems} title={"Time's up:"} />
                  )}
                  {todayItems.length > 0 && (
                    <QuestList items={todayItems} title={"Today:"} />
                  )}
                  {tomorrowItems.length > 0 && (
                    <QuestList items={tomorrowItems} title={"Tomorrow:"} />
                  )}
                  {nextDaysItems.length > 0 && (
                    <QuestList items={nextDaysItems} title={"Next days:"} />
                  )}
                  {completedQuests.length > 0 && (
                    <QuestList items={completedQuests} title={"Completed:"} />
                  )}
                </>
              ) : (
                <EmptyState />
              )}
            </>
          )}

          <AddButton text="+" fn={handleToggle} />

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <QuestForm
              questCategory="stuff"
              questDate=""
              questLevel="easy"
              questTitle=""
              closeModalFn={handleClose}
              id=""
              isQuestNew={true}
              isChallenge={false}
              isDone={false}
            />
          </Backdrop>
        </section>
      )}
    </div>
  );
};
export default MainPage;
