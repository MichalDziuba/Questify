import Notiflix from "notiflix";
import { FC, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { actionLoginUser, actionRegisterUser } from "../../app/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/buttons/landing/landingButton";
import { Login } from "../../components/forms/loginForm/login";
import Register from "../../components/forms/registerForm/register";
import Loader from "../../components/loader/loader";

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

const LandingPage: FC = () => {
  
  const landingForms: entryForm = {
    register: "register",
    login: "login",
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.app.userToken);
  const isLoading = useAppSelector((state) => state.app.isLoading);
 
  const [activeForm, setActiveForm] = useState(landingForms.register);
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRepeat = form.passwordRepeat.value;
    if (password !== passwordRepeat) {
      Notiflix.Notify.failure("The passwords are not the same. Try again.");
    } else {
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
    <section className="h-screen w-screen flex background justify-center ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ml-2 mr-2 md:w-1/2">
          <h1 className=" font-bold text-2xl text-azure mt-12">Questify</h1>
          <div className="font-Montserrat mt-8">
            <div className="  text-xl text-black text-center font-semibold">
              Questify will turn your life into a thrilling game full of amazing
              quests and exciting challenges.
            </div>
          </div>
          <div className="flex items-center justify-center w-full"></div>
          <div className="flex flex-col w-full justify-center items-center mt-12">
            <div className=" text-lg text-gray text-center font-Montserrat pb-4">
              Choose you want to sign up or log in!
            </div>
            <ul className="flex justify-around w-full mt-8">
              <li>
                <Button
                  title="Login"
                  fn={() => setActiveForm(landingForms.login)}
                />
              </li>
              <li>
                <Button
                  title="Register"
                  fn={() => setActiveForm(landingForms.register)}
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
export default LandingPage;
