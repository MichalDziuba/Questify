import React, { FC  } from "react"
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
type Props = {
    dateValue: Dayjs|null;
    setDateValue:React.Dispatch<React.SetStateAction<Dayjs|null>>
}
const Calendar:FC<Props>= ({ dateValue, setDateValue }:Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select a date"
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        
        }}
        renderInput={(params) => <TextField datatype="DD/MM/YYYY" {...params}  />}
        
      />
    </LocalizationProvider>
  );
};
export default Calendar