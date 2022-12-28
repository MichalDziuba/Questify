import { AiFillStar, AiTwotoneTrophy } from "react-icons/ai";

type challengeQuestButtonProps = {
  isQuestChallenge: boolean;
  handleChallenge: (e: React.SyntheticEvent) => void;
};

export const ChallengeQuestButton = ({
  isQuestChallenge,
  handleChallenge,
}: challengeQuestButtonProps) => {
  return (
    <button onClick={handleChallenge}>
      {isQuestChallenge ? (
        <AiFillStar
          className="fill-azure w-5 h-5"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Back to normal quest!"
        />
      ) : (
        <AiTwotoneTrophy
          className="fill-azure w-5 h-5"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Make your quest a challenge!"
        />
      )}
    </button>
  );
};