import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker/DatePicker";
import DateRangePicker from "./DateRangePicker/DateRangePicker";
import { data } from "./Data";

// version 2 for date range pick

export default function DateRangePickerTest() {
  let [show, setShow] = useState(false);
  
  let [selectedDate1, SetSelectedDate1] = useState(new Date());
  let [selectedDate2, SetSelectedDate2] = useState("");

  const formatSelectedDate = (date) => {
    if (!date) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <div>Date Range Picker</div>
      <button onClick={() => setShow(!show)}>Show Calender</button>
      <DateRangePicker
        show={show}
        setShow={setShow}
        showCloseButton={true}
        closeWhenClickOutside={false}

        selectedDate1={selectedDate1}
        setSelectedDate1={SetSelectedDate1}
        selectedDate2={selectedDate2}
        setSelectedDate2={SetSelectedDate2}

        CalenderValues={data}

        disableDatesBeforeSelectedDate={true}

        HeadingMessage={`"${formatSelectedDate(selectedDate1) === "" ? '________' : `${formatSelectedDate(selectedDate1)}`}" To "${formatSelectedDate(selectedDate2) === "" ? '________' : `${formatSelectedDate(selectedDate2)}`}"`}
        numberOfMonthsToShow={4}
        DisableBeforeDates={true}
        DisableBeforeMonths={true}
        showBackgroundDull={true}
      />
    </div>
  );
}
