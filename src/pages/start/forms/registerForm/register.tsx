import { FormEvent } from "react";
import Input from "../../../../components/input/startPage/startPageInput";
import { GoButton } from "../../../../components/buttons/goButton";
import { regexEmail } from "../../../../features/regex/regex";
type registerProps = {
  fn: (e: FormEvent<HTMLFormElement>) => void;
};

const Register = ({ fn }: registerProps) => {
  return (
    <form
      className="flex flex-col w-full justify-center items-center mt-6 min-h-[208px] relative lg:items-start"
      onSubmit={fn}
    >
      <Input title="Name" name="userName" required={true} type="text" />
      <Input
        title="Email"
        name="email"
        required={true}
        type="email"
        pattern={regexEmail.toString()}
      />
      <Input
        title="Password"
        name="password"
        required={true}
        type="password"
        autocomplete="on"
      />
      <Input
        title="Confirm password"
        name="passwordRepeat"
        required={true}
        type="password"
        autocomplete="on"
      />
      <GoButton text="Go!" />
    </form>
  );
};
export default Register;
