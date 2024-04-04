import { ReactComponent as Hamburger } from "../../../assets/svg/dashboardSvg/hambuger.svg";
import { ReactComponent as Dropdown } from "../../../assets/svg/dashboardSvg/dropdown.svg";
import SearchBar from "./SearchBar";
export default function SearchSort({ onChangeKeyword }) {
  // const [search, setSearch] = useState();

  // console.log(search);
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
        <SearchBar onChangeKeyword={onChangeKeyword} />
      </div>

      <div className="border border-b-[1px] border-[#07111c] my-4"></div>
    </>
  );
}
