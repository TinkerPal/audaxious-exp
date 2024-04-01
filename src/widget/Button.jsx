const Button = ({ children, type, ...res }) => {
  return (
    <button
      {...res}
      type={type}
      className="whitespace-nowrap py-[0.5rem] w-[11rem] px-[1rem] font-Poppins border-[#436C82] border-[0.75px] border-opacity-[80%] hover:text-[#060B12] text-[1rem] font-normal rounded-md bg-transparent hover:bg-[#EBEDED]"
    >
      {children}
    </button>
  );
};

export default Button;
