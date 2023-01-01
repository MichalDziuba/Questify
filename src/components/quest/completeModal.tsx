import { Backdrop } from "@mui/material";

type CompletedModalProps = {
  isChallenge: boolean;
  openModalComplete: boolean;
  completeQuest: (e: React.SyntheticEvent) => Promise<void>;
  setOpenModalComplete: (value: React.SetStateAction<boolean>) => void;
};

export const CompletedModal = ({
  isChallenge,
  openModalComplete,
  completeQuest,
  setOpenModalComplete,
}: CompletedModalProps) => {
  return (
    <Backdrop
      sx={{
        color: "#fffff",
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={openModalComplete}
      className="rounded-2xl"
    >
      <div className="flex flex-col justify-around items-center w-11/12 h-4/5 text-white border-solid border-deepBlue border-2 bg-navy rounded-2xl">
        <p className="text-center text-lg">
          Do you want to set this {isChallenge ? "challenge" : "quest"} as
          completed?
        </p>
        <div className="flex justify-around items-center w-full text-lg">
          <button
            className="w-12 h-8 border-2 border-solid bg-green-500 text-center hover:underline hover:border-green-500"
            onClick={completeQuest}
          >
            Yes
          </button>
          <button
            className="w-12 h-8 border-2 border-solid bg-red-500 hover:underline hover:border-red-500"
            onClick={() => setOpenModalComplete(false)}
          >
            No
          </button>
        </div>
      </div>
    </Backdrop>
  );
};