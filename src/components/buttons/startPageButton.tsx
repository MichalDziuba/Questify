
type props = {
  title: string;
  fn: () => void;

};
export const StartPageButton = ({ title, fn }: props) => {
  return (
    <button
      className="bg-orange rounded text-lg text-white font-medium font-Roboto
       w-32 h-8"
      onClick={fn}
    >
      {title}
    </button>
  );
};

