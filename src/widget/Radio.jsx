import { ReactComponent as Checked } from "../assets/svg/dashboardSvg/polcheck.svg";

const Radio = ({ onChange, option, index, checked }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={`option_${index}`}
        name="options"
        value={option}
        checked={checked}
        onChange={onChange}
        className="relative peer shrink-0 appearance-none w-4 h-4 border-2 bg-[#70869273] border-[#A5D7F273] border-opacity-45 rounded-full cursor-pointer"
      />
      <label
        htmlFor={`option_${index}`}
        className="text-[#EBEDED] font-Poppins text-[0.625rem] font-[300]"
      >
        {option}
      </label>
      <Checked />
    </div>
  );
};

export default Radio;
