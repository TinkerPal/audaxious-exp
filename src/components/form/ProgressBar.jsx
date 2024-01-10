import React from "react";

function ProgressBar({ step, totalSteps }) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalSteps; i++) {
      dots.push(
        <div
          key={i}
          className={`h-1 w-[40px] mx-2 rounded-full ${
            i <= step ? "bg-[#EBEDED]" : "bg-[#585C60]"
          }`}
        ></div>
      );
    }
    return dots;
  };

  return <div className="flex justify-center items-center">{renderDots()}</div>;
}

export default ProgressBar;
