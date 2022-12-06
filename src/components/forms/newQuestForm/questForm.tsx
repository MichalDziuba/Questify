import dayjs, { Dayjs, } from "dayjs";
import React, { FC, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Calendar from "../../datePicker/datepicker";
import { GoPrimitiveDot } from "react-icons/go";
import { useAppDispatch } from "../../../app/hooks";
import { actionAddQuest } from "../../../app/actions";

type QuestFormProps ={
closeModalFn : () => void;
}

const QuestForm: FC<QuestFormProps> = ({closeModalFn}) => {
  const dispatch=useAppDispatch()
  const [dateCalendar, setDateCalendar] = useState<Dayjs | null>(dayjs(new Date()));



  const handleSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      difficult: { value: string };
      categories: { value: string };
    };

 const data = {
   title: target.title.value,
   level: target.difficult.value,
   category: target.categories.value,
   date: dateCalendar?.format("DD/MM/YYYY"),
   isChallenge: false,
   isDone: false,
 };
    console.log(data)
   await dispatch(actionAddQuest(data))
   closeModalFn()
    
    
  };
 

  const handleChangeLevel = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const option = e.currentTarget.value;
    const dot: HTMLElement = document.querySelector(
      "#dot_color"
    ) as HTMLElement;
    if (option === "Easy") {
      dot.style.fill = "green";
    }
    if (option === "Hard") {
      dot.style.fill = "red";
    }
    if (option === "Normal") {
      dot.style.fill = "#00D7FF";
    }
  };


  const handleChangeCategories = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const selectForm = e.currentTarget;
    const selectedOption = selectForm.value;
    if (selectedOption === "Stuff") {
      selectForm.style.background = "#B9C3C8";
    }
    if (selectedOption === "Family") {
      selectForm.style.background = "#FFE6D3";
    }
    if (selectedOption === "Health") {
      selectForm.style.background = "#CDF7FF";
    }
    if (selectedOption === "Learning") {
      selectForm.style.background = "#FFF6C0";
    }
    if (selectedOption === "Leisure") {
      selectForm.style.background = "#F8D2FF";
    }
    if (selectedOption === "Work") {
      selectForm.style.background = "#D3F6CE";
    }
  };

  return (
    <div className="w-72 h-72 bg-white rounded-2xl text-black flex flex-col justify-around items-center">
      <form
        className="w-full h-[80%] flex flex-col-reverse items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between w-full flex-row">
          <select
            name="categories"
            onChange={handleChangeCategories}
            className="bg-[#B9C3C8] p-1 rounded-r-xl"
          >
            <option value="stuff" className="">
              Stuff
            </option>
            <option value="family" className="">
              Family
            </option>
            <option value="health" className="">
              Health
            </option>
            <option value="learning" className="">
              Learning
            </option>
            <option value="leisure" className="">
              Leisure
            </option>
            <option value="work" className="">
              Work
            </option>
          </select>

          <div className="flex w-4/12 justify-between font-medium mr-3">
            <button className="text-red-600" type="button" onClick={closeModalFn}>X</button>
            <span className="text-gray text-lg">|</span>
            <button className="text-azure" type="submit">
              START
            </button>
          </div>
        </div>
        <Calendar dateValue={dateCalendar} setDateValue={setDateCalendar} />
        <input
          name="title"
          required
          placeholder="Create a new quest"
          className="border-b-2 border-azure text-azure placeholder:text-gray placeholder:text-center placeholder:text-base outline-0 text-lg w-10/12"
        />
        <div className="flex w-full">
          <div className="flex w-full justify-around">
            <div className="flex w-9/12">
              <span>
                <GoPrimitiveDot
                  className="fill-green-600 w-5 h-5"
                  id="dot_color"
                />
              </span>
              <select
                id="difficult"
                name="difficult"
                onChange={handleChangeLevel}
              >
                <option value="easy"> Easy</option>
                <option value="normal"> Normal</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <button>
              <AiFillStar className="fill-azure w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default QuestForm;
