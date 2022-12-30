import Notiflix from "notiflix";
import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { actionLoginUser, actionRegisterUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { StartPageButton } from "../../components/buttons/startPageButton";
import { Login } from "./forms/loginForm/login";
import Register from "./forms/registerForm/register";
import Loader from "../../components/loading/loader";

type registerData = {
  name: string;
  email: string;
  password: string;
};
type loginData = {
  email: string;
  password: string;
};
type entryName = "login" | "register";

type entryForm = {
  register: entryName;
  login: entryName;
};

const StartPage = () => {
  const landingForms: entryForm = {
    register: "register",
    login: "login",
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.app.userToken);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  const [activeForm, setActiveForm] = useState(landingForms.register);
  const [isLoginButtonActive, setLoginButtonActive] = useState(false);
  const [isRegisterButtonActive, setRegisterButtonActive] = useState(true);

  const handleActiveForm = (
    activeBtnFn: React.Dispatch<React.SetStateAction<boolean>>,
    inactiveBtnFn: React.Dispatch<React.SetStateAction<boolean>>,
    activeFormFn: React.Dispatch<React.SetStateAction<"login" | "register">>,
    form: "login"|"register",
  ) => {
    activeBtnFn(true);
    inactiveBtnFn(false);
    activeFormFn(form);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regexPassword = /^(?=.*[0-9])(?=.*[A-Z])(.{8,})$/;
    const form = e.currentTarget;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRepeat = form.passwordRepeat.value;
    if (!regexPassword.test(password)) {
     Notiflix.Notify.info(
       "Invalid password. Password must contain at least one uppercase letter, one digit, and have a minimum length of 8 characters."
      ); 
      return false 
    }
    if (password !== passwordRepeat) {
      Notiflix.Notify.failure("The passwords are not the same. Try again.");
      return false
    }
    else {
      const data: registerData = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(actionRegisterUser(data));
    }
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const data: loginData = {
      email: email,
      password: password,
    };
    await dispatch(actionLoginUser(data));
    await navigate("/");
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <section className="h-screen w-screen flex background justify-center lg:items-center  ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ml-2 mr-2 md:w-1/2 lg:w-2/5 ">
          <h1 className=" font-bold text-2xl lg:text-3xl text-azure mt-12">Questify</h1>
          <div className="font-Montserrat mt-8">
            <div className="  text-xl text-black text-center font-semibold lg:text-2xl lg:text-start">
              Questify will turn your life into a thrilling game full of amazing
              quests and exciting challenges.
            </div>
          </div>
          <div className="flex items-center justify-center w-full"></div>
          <div className="flex flex-col w-full justify-center items-center mt-12 lg:items-start">
            <div className=" text-lg text-gray text-center font-Montserrat pb-4 lg:text-xl ">
              Choose you want to sign up or log in!
            </div>
            <ul className="flex justify-around w-full mt-8 lg:items-start lg:w-4/6">
              <li>
                  <StartPageButton
                    activeClass={isLoginButtonActive}
                  title="Login"
                  fn={()=>handleActiveForm(
                    setLoginButtonActive,
                    setRegisterButtonActive,
                    setActiveForm,
                    "login"
                  )}
                />
              </li>
              <li>
                  <StartPageButton                   
                    activeClass={isRegisterButtonActive}
                  title="Register"
                  fn={()=>handleActiveForm(
                    setRegisterButtonActive,
                    setLoginButtonActive,
                    setActiveForm,
                    "register"
                  )}
                />
              </li>
            </ul>
            {activeForm === landingForms.register ? (
              <Register fn={handleRegister} />
            ) : (
              <Login fn={handleLogin} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default StartPage;
