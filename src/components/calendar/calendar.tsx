import React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
type calendarProps = {
  dateValue: Dayjs | null;
  setDateValue: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  isQuestChallenge: boolean;
};

const Calendar = ({
  dateValue,
  setDateValue,
  isQuestChallenge,
}: calendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select a date"
        value={dateValue}
        inputFormat="DD/MM/YYYY"
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            sx={
              isQuestChallenge
                ? {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      color: "white",
                    },
                    svg: {
                      color: "white",
                    },
                  }
                : {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                      color: "black",
                    },
                  }
            }
            InputLabelProps={{
              style: {
                color: isQuestChallenge ? "white" : "black",
              },
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default Calendar;
