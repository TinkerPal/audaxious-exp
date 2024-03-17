export default function Loading({ text }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Card container */}

      <div className="flex  items-center justify-center   ">
        <svg
          className="animate-spin  w-8 text-[#3b1b5d]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      {/* <div className="font-mono mt-4 text-2xl font-bold">{text || ""}</div> */}
    </div>
  );
}
