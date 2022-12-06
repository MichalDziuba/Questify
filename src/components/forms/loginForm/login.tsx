import { FC, FormEvent } from "react";
import Input from "../../input/landing/landingInput";
import { GoButton } from "../../buttons/landing/goButton";

type Props = {
  fn: (e: FormEvent<HTMLFormElement>) => void;
};

export const Login: FC<Props> = ({ fn }) => {
  return (
    <form
      className="flex flex-col w-full justify-center items-center mt-6 min-h-[208px] relative"
      onSubmit={fn}
    >
      <Input
        title="Email"
        name="email"
        // required={true}
        type="email"
      />
      <Input
        title="Password"
        name="password"
        // required={true}
        type="password"
      />
      <GoButton text="Go!" />
    </form>
  );
};
