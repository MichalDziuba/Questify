type questDifficultProps = {
  handleChangeLevel: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  questLevel: string;
  isQuestChallenge: boolean;
};


export const QuestDifficult = ({
  handleChangeLevel,
  questLevel,
  isQuestChallenge,
}: questDifficultProps) => {
  return (
    <select
      id="difficult"
      name="difficult"
      onChange={handleChangeLevel}
      defaultValue={questLevel}
      className={
        isQuestChallenge ? "bg-deepBlue text-white" : "bg-white text-black"
      }
    >
      <option value="easy"> Easy</option>
      <option value="normal"> Normal</option>
      <option value="hard">Hard</option>
    </select>
  );
};