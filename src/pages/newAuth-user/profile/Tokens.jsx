import React from "react";
import { ReactComponent as Token } from "../../../assets/svg/dashboardSvg/token.svg";
import { ReactComponent as Diamond } from "../../../assets/svg/dashboardSvg/diamond.svg";
import { ReactComponent as EthIcon } from "../../../assets/svg/dashboardSvg/ethLogo.svg";
import { ReactComponent as BnbIcon } from "../../../assets/svg/dashboardSvg/bnbIcon.svg";
import { ReactComponent as AdxIcon } from "../../../assets/svg/dashboardSvg/adxCoin.svg";
import clsx from "clsx";
const Tokens = () => {
  const TOKENS = [
    {
      id: "t1",
      coin: "USDT",
      amount: 187.5325,
      value: 0.89,
      price: 3100,
      icons: <Diamond />,
    },
    {
      id: "t2",
      coin: "ETHER",
      amount: 187.54,
      value: 0.56,
      price: 3100,
      icons: <EthIcon />,
    },
    {
      id: "t3",
      coin: "BNB",
      amount: 0.5054,
      value: 3.56,
      price: 3100,
      icons: <BnbIcon />,
    },
    {
      id: "t3",
      coin: "BNB",
      amount: 187.54,
      value: 0.56,
      price: 3100,
      icons: <AdxIcon />,
    },
  ];
  return (
    <div className="border-[1.8px] border-[#18232C] my-[3rem] py-[1rem] md:py-[3rem] px-[0.6rem] md:px-[3rem] lg:px-[6rem] rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-[0.4rem]">
          <span>
            <Token />
          </span>
          <p className="text-[0.7rem] md:text-[1rem] font-Poppins font-[275] text-[#E8E8E8]">
            Tokens
          </p>
        </div>
        <button className="border-[1.8px] border-[#18232C] py-[0.5rem] px-[1rem] rounded-[0.23081rem]">
          <p className="text-[0.7rem] md:text-[1rem] font-[400] font-Poppins text-[#E8E8E8]">
            Claim reward
          </p>
        </button>
      </div>
      <div className="flex justify-center gap-5 md:gap-0 md:justify-between mt-[1.5rem] flex-wrap">
        {/* {TOKENS.map((token, index) => (
          <div
            key={index}
            className="border-[1.8px] border-[#18232C] py-[1rem] px-[2rem] rounded-[0.23081rem] font-Poppins flex flex-col gap-[0.7rem]"
          >
            <div className="flex flex-col gap-[0.3rem]">
              <span>{token.icons}</span>
              <p className="text-[0.7rem] text-[#A5A5A5]">{token.coin}</p>
            </div>
            <p className="text-[#E8E8E8] font-Poppins text-[1.3rem]">
              {token.amount}
            </p>
            <div className="flex gap-2">
              <span
                className={clsx(
                  "text-[0.75rem] font-Poppins font-[300]",
                  token.value < 1 ? "text-[#D04740]" : "text-[#51E19E]"
                )}
                style={{ wordBreak: "break-all" }}
              >
                {token.value > 1 ? "+" : "-"}
                {token.value}%
              </span>
              <span className="text-[0.75rem] text-[#909292] font-Poppins font-[300]">
                ${token.price}
              </span>
            </div>
          </div>
        ))} */}

        <p>You currently have no reward</p>
      </div>
    </div>
  );
};

export default Tokens;
