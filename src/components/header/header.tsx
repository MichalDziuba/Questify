import { FC } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Notiflix from 'notiflix'
import { actionLogoutUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getLocalStorageToken } from "../../features/localstorage/localstorageData";


export const Header: FC = () => {

  const userName: string = useAppSelector(state => state.app.userName) || "?";
  const token = getLocalStorageToken()
  const userFirstChar = userName.split("")[0];
  const dispatch = useAppDispatch();


  const handleLogout = async () => {
    await dispatch(actionLogoutUser(token));
    localStorage.clear()
    Notiflix.Notify.info("Logout successful! See you soon!  ")
  };


    return (
      <nav className="h-16 bg-navyblue w-screen flex justify-between items-center  ">
        <div className=" text-azure text-xl ml-4">Questify</div>
        <ul className="flex w-20 justify-around mr-4">
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
      </nav>
    );
}