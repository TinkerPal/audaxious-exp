import { useState } from "react";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
const GenerateDropdown = () => {
  // const [categories, setCate]
  const categories = [1, 2, 3, 4];

  const [searchInput, setSearchInput] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-[6rem] font-medium text-[#000]"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(false)}
    >
      <div
        className="w-full bg-[#79C4EC] p-2 flex text-[0.8rem] border-[0.5px] border-[#2A3C46] font-Poppins items-center text-[#000] justify-between rounded cursor-pointer"
        onMouseEnter={() => setOpen(true)}
      >
        {searchInput ? `Generate ${searchInput}` : "Generate"}
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
              className={`p-2 text-sm hover:bg-[#79C4EC] cursor-pointer flex justify-between ${
                category === searchInput ? "bg-sky-500" : ""
              }`}
              onClick={() => {
                setSearchInput(category);
                setOpen(false);
              }}
            >
              <p>{"Generate"}</p> <p>{category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenerateDropdown;
