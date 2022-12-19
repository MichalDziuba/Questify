import { FC } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Notiflix from "notiflix";
import { actionLogoutUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const Header: FC = () => {
  const userName = useAppSelector((state) => state.app.userName) || "";
  const token = useAppSelector((state) => state.app.userToken);
  const userFirstChar = userName.split("")[0];
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(actionLogoutUser(token));
    localStorage.clear();
    Notiflix.Notify.info("Logout successful! See you soon!  ");
  };

  return (
    <nav className="h-16 bg-navyblue w-screen flex items-center justify-center  ">
      <div className="flex justify-between items-center w-[95%]">
        <div className=" text-azure text-xl">Questify</div>
        <ul className="flex w-20 justify-around">
          <li>
            <button className="rounded-full bg-navy w-8 h-8 text-white text-lg font-medium">
              {userFirstChar}
            </button>
          </li>
          <li>
            <button>
              <RiLogoutCircleRLine
                className="fill-navy w-8 h-8"
                onClick={handleLogout}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
