type startButtonProps = {
  title: string;
  fn: () => void;
  activeClass: boolean;
};
export const StartPageButton = ({ title, fn, activeClass }: startButtonProps) => {
  return (
    <button
      className={`border-orange border-2  rounded text-base  font-medium  leading-tight text-center
       w-32 h-8 ${
         activeClass
           ? "scale-110 bg-orange shadow-md shadow-orange text-white"
           : "text-gray shadow-md shadow-gray"
       }`}
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title={`Go to ${title}`}
      onClick={fn}
    >
      {title}
    </button>
  );
};
