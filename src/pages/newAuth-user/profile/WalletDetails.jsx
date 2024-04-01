import React from "react";

import { ReactComponent as Wallet } from "../../../assets/svg/dashboardSvg/wallet.svg";
import { ReactComponent as Plus } from "../../../assets/svg/dashboardSvg/walletPlus.svg";
import { ReactComponent as Stroke } from "../../../assets/svg/dashboardSvg/strokes.svg";
import { ReactComponent as Copy } from "../../../assets/svg/dashboardSvg/copy.svg";
import { ReactComponent as Delete } from "../../../assets/svg/dashboardSvg/delete.svg";
import { useSelector } from "react-redux";

const WalletDetails = () => {
  const walletId = useSelector((state) => state.authentication.walletId);
  const WALLET = [walletId];
  return (
    <div className="border-[1.8px] border-[#18232C] my-[3rem] py-[1rem] md:py-[3rem] px-[0.6rem] md:px-[3rem] lg:px-[6rem] rounded-lg">
      <div className="flex justify-between gap-5 md:gap-0">
        <div className="flex items-center gap-[0.4rem]">
          <span>
            <Wallet />
          </span>
          <p className="text-[0.5rem] md:text-[1rem] font-Poppins font-[300] text-[#E8E8E8]">
            Wallet Details
          </p>
        </div>
        <button className="flex items-center gap-[0.5rem] border-[1.8px] border-[#18232C] py-[0.5rem] px-[1rem] rounded-[0.23081rem]">
          <span>
            <Plus />
          </span>
          <p className="text-[0.5rem] md:text-[1rem] font-[400] font-Poppins text-[#E8E8E8]">
            Bind Wallet
          </p>
        </button>
      </div>
      <div className="flex justify-center gap-5 md:gap-0 md:justify-between mt-[1.5rem] flex-wrap">
        {WALLET.map((wallet, index) => (
          <button
            key={index}
            className="flex items-center gap-5 border-[1.8px] border-[#18232C] py-[0.5rem] px-[1rem] rounded-[0.23081rem]"
          >
            <p className=" whitespace-nowrap text-[1rem] font-[400] font-Poppins text-[#808080]">
              {wallet.slice(0, 10) + "..." + wallet.slice(30, wallet.length)}
            </p>
            <div className="flex items-center gap-2">
              <span>
                <Copy />
              </span>
              <span>
                <Stroke />
              </span>
              <span>
                <Delete />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalletDetails;
