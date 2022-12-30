import { FormEvent } from "react";
import Input from "../../../../components/input/startPage/startPageInput";
import { GoButton } from "../../../../components/buttons/goButton";
import { regexEmail } from "../../../../features/regex/regex";

type loginProps = {
  fn: (e: FormEvent<HTMLFormElement>) => void;
};

export const Login = ({ fn }: loginProps) => {
  return (
    <form
      className="flex flex-col w-full justify-center items-center mt-6 min-h-[208px] relative lg:items-start"
      onSubmit={fn}
    >
      <Input
        title="Email"
        name="email"
        required={true}
        pattern={regexEmail}
        type="email"
      />
      <Input
        title="Password"
        name="password"
        required={true}
        type="password"
        autocomplete="on"
      />
      <GoButton text="Go!" />
    </form>
  );
};
