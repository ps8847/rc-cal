import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker/DatePicker";
import { data } from "./Data";

/**
 * DatePickerTest component demonstrates the usage of the DatePicker component.
 * It allows users to select a date and displays the selected date along with a calendar for date picking.
 */
export default function DatePickerTest() {
  // State variables for managing the visibility of the calendar, selected date, and messages
  let [show, setShow] = useState(false);
  let [selectedDate , SetSelectedDate] = useState(new Date());
  let [messages , setMessages] = useState(null);

  // Update the messages when the selected date changes
  useEffect(() => {
    if(selectedDate){
      setMessages(selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }));
    } else {
      setMessages(null);
    }
  }, [selectedDate]);

  return (
    <div>
      {/* Title */}
      <div>Date Picker</div>
      
      {/* Button to toggle the visibility of the calendar */}
      <button onClick={() => setShow(!show)}>Show Calendar</button>
      
      {/* DatePicker component */}

      <DatePicker
        show={show} // Boolean indicating whether to show the calendar
        setShow={setShow} // Function to toggle the visibility of the calendar
        showCloseButton={true} // Boolean indicating whether to show the close button in the calendar
        closeWhenClickOutside={false} // Boolean indicating whether to close the calendar when clicking outside of it

        CalenderValues={data} // Array of objects containing date-value pairs for calendar values

        selectedDate={selectedDate} // Currently selected date
        setSelectedDate={SetSelectedDate} // Function to set the selected date
        HeadingMessage={messages} // Message to display as the heading in the calendar

        disableDatesBeforeSelectedDate={false} // Boolean indicating whether to disable dates before the selected date

        numberOfMonthsToShow={3} // Number of months to show in the calendar
        DisableBeforeDates={true} // Boolean indicating whether to disable dates before today
        DisableBeforeMonths={true} // Boolean indicating whether to disable dates before the current month
        showBackgroundDull={true} // Boolean indicating whether to show a dull background when the calendar is open
      />
    </div>
  );
}
