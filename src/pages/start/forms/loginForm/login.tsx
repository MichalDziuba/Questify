import { FC, FormEvent } from "react";
import Input from "../../../../components/input/landing/landingInput";
import { GoButton } from "../../../../components/buttons/goButton";

type props = {
  fn: (e: FormEvent<HTMLFormElement>) => void;
};

export const Login: FC<props> = ({ fn }) => {
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
