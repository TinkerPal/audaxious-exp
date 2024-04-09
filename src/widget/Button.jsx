import clsx from "clsx";
const Button = ({ children, type, bgColor, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        `whitespace-nowrap py-[0.5rem] w-[11rem] px-[1rem] font-Poppins border-[#436C82] border-[0.75px] border-opacity-[80%] hover:text-[#060B12] text-[1rem] font-normal rounded-md hover:bg-[#EBEDED]`,
        bgColor ? `bg-${bgColor}` : "bg-transparent"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
