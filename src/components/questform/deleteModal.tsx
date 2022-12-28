import { Backdrop } from "@mui/material";

type deleteModalProps = {
  modalDeleteOpen: boolean;
  isQuestChallenge: boolean;
  handleDelete: () => void;
  setModalOpen: (open: boolean) => void;
};

export const DeleteModal = ({
  modalDeleteOpen,
  isQuestChallenge,
  handleDelete,
  setModalOpen,
}: deleteModalProps) => {
  return (
    <Backdrop
      sx={{
        color: "#ffff",
        justifyItems: "center",
        alignItems: "center",
        opacity: "1",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={modalDeleteOpen}
      className="open:animate-fade-in"
    >
      <div className=" flex flex-col w-64 h-36 items-center justify-evenly border-solid border-2 bg-navyBlue rounded duration-500 ease-in-out ">
        <h2 className="text-center text-lg">{`Do you want to delete this ${
          isQuestChallenge ? "challenge" : "quest"
        }?`}</h2>
        <ul className="flex justify-around w-9/12 text-lg">
          <li>
            <button
              className="w-12 h-8 border-2 border-solid bg-green-500 text-center"
              onClick={handleDelete}
            >
              Yes
            </button>
          </li>
          <li>
            <button
              className="w-12 h-8 border-2 border-solid bg-red-500"
              onClick={() => setModalOpen(false)}
            >
              No
            </button>
          </li>
        </ul>
      </div>
    </Backdrop>
  );
};