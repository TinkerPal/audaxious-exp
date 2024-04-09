import { useState } from "react";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
const ScheduleDropdown = () => {
  // const [categories, setCate]
  const categories = ["Publish now"];

  const [selectInput, setSelectInput] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-[9rem] font-medium text-[#000]"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(false)}
    >
      <div
        className="w-full bg-[#79C4EC] p-2 flex text-[0.8rem] border-[0.5px] border-[#2A3C46] font-Poppins items-center text-[#000] justify-between rounded cursor-pointer"
        onMouseEnter={() => setOpen(true)}
      >
        {selectInput ? `${selectInput}` : "Schedule"}
        <Dropdowns />
      </div>
      <ul
        className={`bg-[#FFF] border-[0.5px] border-[#2A3C46] mt-2 overflow-y-auto rounded ${
          open ? "block" : "hidden"
        }`}
      >
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={`p-2 text-sm hover:bg-[#79C4EC] cursor-pointer ${
                category === selectInput ? "bg-sky-500" : ""
              }`}
              onClick={() => {
                setSelectInput(category);
                setOpen(false);
              }}
            >
              <p>{category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScheduleDropdown;
