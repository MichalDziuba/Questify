type cancelButtonProps = {
    closeModalFn:()=>void
}
export const ButtonCancel = ({ closeModalFn }: cancelButtonProps) => {
  return (
    <button
      className=" text-red-600 transition duration-50 ease-in-out"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Cancel"
      type="button"
      onClick={closeModalFn}
    >
      X
    </button>
  );
};