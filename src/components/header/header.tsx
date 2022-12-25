import { RiLogoutCircleRLine } from "react-icons/ri";
import Notiflix from "notiflix";
import { actionLogoutUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const Header = () => {
  const userName = useAppSelector((state) => state.app.userName) || "";
  const token = useAppSelector((state) => state.app.userToken);
  const userFirstChar = userName.charAt(0);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(actionLogoutUser(token));
    localStorage.clear();
    Notiflix.Notify.info("Logout successful! See you soon!");
  };

  return (
    <nav className="h-16 bg-navyblue w-screen flex items-center justify-center  ">
      <div className="flex justify-between items-center w-[93%]">
        <h2 className=" text-azure text-xl">Questify</h2>

        <div className="flex">
          <div className="flex items-center justify-center">
            <span className="rounded-full bg-navy w-8 h-8 text-white text-lg font-medium flex justify-center items-center">
              {userFirstChar}
            </span>
            <p className="hidden md:block ml-2 text-gray text-lg font-light font-Montserrat">{userName} Quest Log</p>
          </div>

          <button className="md:hidden">
            <RiLogoutCircleRLine
              className="fill-navy w-8 h-8 ml-2"
              onClick={handleLogout}
            />
          </button>
        </div>
        <button className="hidden md:block">
          <RiLogoutCircleRLine
            className="fill-navy w-8 h-8 ml-2"
            onClick={handleLogout}
          />
        </button>
      </div>
    </nav>
  );
};
