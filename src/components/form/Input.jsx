function Input({
  name,
  label,
  type,
  value,
  placeHolder,
  required,
  onChange,
  ...rest
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-black" htmlFor={name}>
        {label}
        {required && <span className="text-[#EB5757] ml-1">*</span>}
      </label>
      <input
        className="appearance-none font-Poppins border bg-[#04080D] border-[#424A57] text-[#A6A6A8] rounded-[9px] border-solid w-full h-[49px] px-3 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        {...rest}
      />
    </div>
  );
}

export default Input;
