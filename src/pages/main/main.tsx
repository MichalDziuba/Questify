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

const MainPage: FC = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const token = useAppSelector((state) => state.app.userToken);
  const items = useAppSelector((state) => state.app.items);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  let todayItems: questType[] = [];
  let tomorrowItems: questType[] = [];
  let nextDaysItems: questType[] = [];
  let unfulfilledItems: questType[] = [];

  items.forEach((item) => {
    const itemDate = parseDate(item.date);
    const today = parsedToday;
    const tomorrow = parsedTomorrow;
    if (itemDate.getTime() === today.getTime()) {
      todayItems.push(item);
    } else if (itemDate.getTime() === tomorrow.getTime()) {
      tomorrowItems.push(item);
    } else if (itemDate.getTime() > tomorrow.getTime()) {
      nextDaysItems.push(item);
    } else if (itemDate.getTime() < today.getTime()) {
      unfulfilledItems.push(item);
    }
  });

  nextDaysItems.sort((a, b) => {
    const aDate = parseDate(a.date);
    const bDate = parseDate(b.date);
    return aDate.getTime() - bDate.getTime();
  });

  unfulfilledItems.sort((a, b) => {
    const aDate = parseDate(a.date);
    const bDate = parseDate(b.date);
    return aDate.getTime() - bDate.getTime();
  });

  useEffect(() => {
    dispatch(actionGetAllQuests(token));
  }, [dispatch, token]);

  return (
    <div className=" min-h-screen h-fit bg-darkwhite pb-8">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="relative flex flex-col flex-wrap  items-center font-Montserrat max-w-screen min-w-screen ">
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
            </>
          ) : (
            <EmptyState />
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
