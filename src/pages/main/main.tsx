import { FC, useState } from "react";
import { AddButton } from "../../components/buttons/main/addButton/addButton";
import { Header } from "../../components/header/header";
import { useAppSelector } from "../../app/hooks";
import Loader from "../../components/loader/loader";
import EmptyState from "../../components/emptystate/emptyState";
import Quest from "../../components/quest/quest";
import Backdrop from "@mui/material/Backdrop";
import QuestForm from "../../components/forms/newQuestForm/questForm";


const MainPage: FC = () => {
const isLoading = useAppSelector((state) => state.app.isLoading);
const items=useAppSelector(state=>state.app.items)
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-center">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="relative">
          {items.length > 0 ? (
            <div>
              <Quest />
            </div>
          ) : (
            <EmptyState />
          )}
          <AddButton text="+" fn={handleToggle} />

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <QuestForm closeModalFn={handleClose} />
          </Backdrop>
        </section>
      )}
    </div>
  );
};
export default MainPage ;
