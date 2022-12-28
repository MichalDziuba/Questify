
type addButtonProps = {
    text: string,
    fn: () => void;
}

 export const AddButton = ({ text, fn }: addButtonProps) => {
   return (
     <button
       className="w-12 h-12 rounded-full bg-orange text-3xl  text-white fixed bottom-8 right-8 transition duration-150 ease-in-out lg:bottom-12 lg:right-12"
       onClick={fn}
       data-bs-toggle="tooltip"
       data-bs-placement="top"
       title="Add a new quest"
     >
       {text}
     </button>
   );
 };
