import { useState } from "react";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
const SentimentDropdown = ({ sentiment, setSentiment }) => {
  // const [categories, setCate]
  const categories = ["Positive", "Negative", "Neutral"];

  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-[6rem] font-medium text-[#707171]"
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(false)}
    >
      <div
        className="w-[115px] bg-transparent px-2 py-1   flex  border border-[#A9F453]  items-center text-[#A9F453] justify-between rounded-md cursor-pointer"
        // onClick={() => {
        //   setOpen((prev) => !prev);
        // }}
        onMouseEnter={() => setOpen(true)}
      >
        {sentiment ? sentiment : "Sentiment"}
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
                category === sentiment ? "bg-sky-500" : ""
              }`}
              onClick={() => {
                setSentiment(category);
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
