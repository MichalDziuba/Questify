type props = {
    questTitle: string;
    isQuestChallenge: boolean;
}


export const QuestTitleInput = ({ questTitle, isQuestChallenge }:props) => {
  return (
    <input
      name="title"
      defaultValue={questTitle}
      maxLength={30}
      required
      placeholder={
        isQuestChallenge ? "Create a challange!" : "Create a new quest"
      }
      className={`border-b-2 border-azure text-azure placeholder:text-gray placeholder:text-center placeholder:text-base outline-0 text-lg w-10/12 ${
        isQuestChallenge ? "bg-deepblue" : "bg-white"
      }`}
    />
  );
};