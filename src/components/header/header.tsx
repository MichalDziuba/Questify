import Notiflix from "notiflix";
import { actionLogoutUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LogoutButton } from "../buttons/logoutButton";
import { ChallengeButton } from "../buttons/challengeButton";

type HeaderProps = {
  openChallengesList:()=>void;
  isOpenChallengesList:boolean;
}

export const Header = ({openChallengesList,isOpenChallengesList}:HeaderProps) => {
  const userName = useAppSelector((state) => state.app.userName); // deleted =>|| "";
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
            <div className="md:hidden flex items-center">
              <ChallengeButton
                handleToggleList={openChallengesList}
                isListOpen={isOpenChallengesList}
              />
            </div>

            <span className="rounded-full bg-navy w-8 h-8 text-white text-lg font-medium flex justify-center items-center">
              {userFirstChar}
            </span>
            <p className="hidden md:block ml-2 text-gray text-lg font-light font-Montserrat">
              {userName} Quest Log
            </p>
          </div>
          <div className="md:hidden flex items-center">
            <LogoutButton handleLogout={handleLogout} />
          </div>
        </div>
        <div className="items-center justify-center hidden md:flex">
          <ChallengeButton
            handleToggleList={openChallengesList}
            isListOpen={isOpenChallengesList}
          />
          <LogoutButton handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};
