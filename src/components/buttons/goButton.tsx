type goButtonProps={
  text:string
}

export const GoButton = ({ text }: goButtonProps) => {
  return (
    <button
      className="rounded-full bg-orange w-14 h-14 font-Roboto text-xl text-white font-medium mt-8 absolute bottom-[-50px] lg:left-[25%] "
      type="submit"
    >
      {text}
    </button>
  );
};
