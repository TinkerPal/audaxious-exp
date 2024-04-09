import { useState } from "react";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
const SentimentDropdown = () => {
  // const [categories, setCate]
  const categories = ["Positive", "Negative", "Neutral"];

  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-[9rem] font-medium text-[#707171]"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(false)}
    >
      <div
        className="w-full bg-transparent p-2 flex text-[0.8rem] border-[0.5px] border-[#2A3C46] font-Poppins items-center text-[#707171] justify-between rounded cursor-pointer"
        // onClick={() => {
        //   setOpen((prev) => !prev);
        // }}
        onMouseEnter={() => setOpen(true)}
      >
        {searchInput ? searchInput : "Select a category"}
        <Dropdowns />
      </div>
      <ul
        className={`bg-transparent border-[0.5px] border-[#2A3C46] mt-2 overflow-y-auto rounded ${
          open ? "block" : "hidden"
        }`}
      >
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={`p-2 text-sm hover:bg-[#79C4EC] hover:text-white cursor-pointer ${
                category === searchInput ? "bg-sky-500" : ""
              }`}
              onClick={() => {
                setSearchInput(category);
                setOpen(false);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SentimentDropdown;
