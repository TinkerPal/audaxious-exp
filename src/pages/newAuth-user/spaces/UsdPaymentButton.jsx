import { ReactComponent as AdxCoin } from "../../../assets/svg/dashboardSvg/dia.svg";
import { ReactComponent as Dropdown } from "../../../assets/svg/dashboardSvg/dropdowns.svg";

const UsdPaymentButton = () => {
  return (
    <div className=" flex items-center gap-3">
      <button
        type="button"
        className="whitespace-nowrap flex gap-2 items-center py-[0.5rem] px-[1rem] font-Poppins text-[#EBEDED] text-[1rem] font-normal rounded-md bg-[#09141A] border-[2px] border-[#4F6C7B]"
      >
        <span>
          <AdxCoin />
        </span>
        <span>500 USDT</span>
        <span>
          <Dropdown />
        </span>
      </button>
      <button
        type="button"
        className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#EBEDED]"
      >
        Make Payment
      </button>
    </div>
  );
};

export default UsdPaymentButton;
