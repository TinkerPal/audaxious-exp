import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  outline,
  rounded,
  round,
  className: additionalClassName,
  isLoading,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "px-6 h-[56px] border border-2 flex items-center justify-center gap-3 font-Poppins text-[18px] font-bold font-normal",
    {
      "border-[#15151A] bg-[#EBEDED] text-[#060B12]": primary,
      "border-redButton bg-redButton text-shade2": secondary,
      "rounded-full": rounded,
      "rounded-[10px]": round,
      "bg-white text-shade6 border-rates": outline,
      "text-shade2": outline && primary,
      "text-shade2": outline && secondary,
    },
    additionalClassName
  );

  return (
    <>
      <button type="submit" {...rest} className={classes}>
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}{" "}
      </button>
    </>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
