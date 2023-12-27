import { useState } from "react";
import Calendar from "react-calendar";

const Calender = ({ onDateSelect }) => {
  const [value, onChange] = useState(new Date());

  const handleDateSelect = (date) => {
    onChange(date);
    onDateSelect(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateSelect} value={value} />
    </div>
  );
};

export default Calender;