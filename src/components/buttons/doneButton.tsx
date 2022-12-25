
type props = {
  completeQuest: (e: React.SyntheticEvent) => Promise<void>;
};
export const ButtonDone = ({completeQuest}:props) => {
    return (
      <button
        className={`absolute bottom-0 bg-azure text-white rounded-t-xl w-24 font-medium `}
        onClick={completeQuest}
      >
        DONE!
      </button>
    );
}