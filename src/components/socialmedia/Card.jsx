import clsx from "clsx";
import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className={clsx(
        "min-w-[18rem]  max-w-[28rem] border-[1px] border-[#2A3C46] 2xl:min-w-[22rem] border-opacity-50 cursor-pointer bg-ElipseBg rounded-[16px]"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
