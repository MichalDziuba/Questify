type goButtonProps={
  text:string
}

export const GoButton = ({ text }: goButtonProps) => {
  return (
    <button
      className="rounded-full bg-orange w-14 h-14 font-Roboto text-xl transition duration-50 ease-in-out text-white font-medium mt-8 absolute bottom-[-50px] lg:left-[25%] "
      type="submit"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Go next! "
    >
      {text}
    </button>
  );
};
