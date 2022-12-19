import { FC, useEffect, useState } from "react";
import { AddButton } from "../../components/buttons/main/addButton/addButton";
import { Header } from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../../components/loader/loader";
import EmptyState from "../../components/emptystate/emptyState";
import Backdrop from "@mui/material/Backdrop";
import QuestForm from "../../components/forms/questForm/questForm";
import { actionGetAllQuests } from "../../app/actions";
import { questType } from "../../components/quest/quest";
import { today, tomorrow } from "../../features/date/date";
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

  const filteringItems = items.map((item) => {
    if (item.date === today) {
      todayItems.push(item);
    }
    if (item.date === tomorrow) {
      tomorrowItems.push(item);
    }
    if (item.date < today) {
      unfulfilledItems.push(item);
    }
    if (item.date > tomorrow) {
      nextDaysItems.push(item);
    }
  });

  useEffect(() => {
    dispatch(actionGetAllQuests(token));
  }, []);

  return (
    <div className=" h-screen ">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="relative flex flex-col  items-center font-Montserrat h-full bg-darkwhite bg-center bg-cover bg-none ">
          {items.length > 0 ? (
            <>
              {unfulfilledItems.length > 0 && (
                <QuestList items={unfulfilledItems} title={"Time's' up:"} />
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
              closeModalFn={handleClose}
              id=""
              isQuestNew={true}
              isChallenge={false}
            />
          </Backdrop>
        </section>
      )}
    </div>
  );
};
export default MainPage;
