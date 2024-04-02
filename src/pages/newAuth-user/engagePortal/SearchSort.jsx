import { ReactComponent as Hamburger } from "../../../assets/svg/dashboardSvg/hambuger.svg";
import { ReactComponent as Dropdown } from "../../../assets/svg/dashboardSvg/dropdown.svg";
export default function SearchSort() {
  const SearchBar = ({ onChangeKeyword }) => {
    return (
      <div className="relative ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>{" "}
        </span>
        <input
          type="text"
          placeholder="Search spaces..."
          className="block w-full pl-10 pr-[15px] py-[15px] bg-[#07111c] rounded-[10rem] border border-[#07111c] focus:border-[#171720] focus:ring focus:ring-[#171720] focus:ring-opacity-50"
          onChange={(e) => onChangeKeyword(e.target.value)}
        />
      </div>
    );
  };
  return (
    <>
      <div className="flex items-end justify-between pt-5 ">
        <div className="flex gap-2 xl:gap-5 items-center cursor-pointer">
          <span>
            <Hamburger />
          </span>
          <span className="whitespace-nowrap font-Poppins text-[0.875rem] text-gray-300">
            All posts
          </span>
          <span>
            <Dropdown />
          </span>
        </div>
        <SearchBar onChangeKeyword="" />
      </div>

      <div className="border border-b-[1px] border-[#07111c] my-4"></div>
    </>
  );
}
