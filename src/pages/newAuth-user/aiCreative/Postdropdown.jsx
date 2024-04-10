import { useState } from "react";
const Postdropdown = () => {
  // const [categories, setCate]
  const categories = ["Re-schedule posts", "Delete post"];

  const [selectInput, setSelectInput] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="font-medium text-[#000]"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(false)}
    >
      <div
        className="cursor-pointer text-end text-[#FFF]"
        onMouseEnter={() => setOpen(true)}
      >
        ...
      </div>
      {open && (
        <ul
          className={`bg-[#FFF] border-[0.5px] border-[#2A3C46] mt-2 overflow-y-auto rounded`}
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
      )}
    </div>
  );
};

export default Postdropdown;
