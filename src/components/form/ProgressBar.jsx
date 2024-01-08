// import React from "react";

// function ProgressBar({ step, totalSteps }) {
//   return (
//     <div className="h-1 bg-[#585C60] w-full rounded-sm relative overflow-hidden">
//       <div
//         className="absolute left-0 inset-y-0 transition-all bg-[#EBEDED]"
//         style={{ width: ((step + 1) / totalSteps) * 100 + "%" }}
//       ></div>
//     </div>
//   );
// }

// export default ProgressBar;

import React from "react";

function ProgressBar({ step, totalSteps }) {
  const segments = Array.from({ length: totalSteps }, (_, index) => (
    <div
      key={index}
      className={`h-2 w-${100 / totalSteps}% bg-[#EBEDED] ${
        index <= step ? "bg-green-500" : "bg-[#585C60]"
      }`}
    ></div>
  ));

  return <div className="flex">{segments}</div>;
}

export default ProgressBar;
