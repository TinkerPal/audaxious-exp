import classNames from 'classnames';

const Input = ({
  type,
  name,
  value,
  placeholder,
  label,
  className,
  ...rest
}) => {
  const baseClassNames = classNames(
    'appearance-none font-Poppins border bg-[#04080D] border-[#424A57] text-[#A6A6A8] rounded-[9px] border-solid w-full h-[49px] px-3 leading-tight focus:outline-none focus:shadow-outline',
    className
  );

  return (
    <div>
      <label className='block mt-8 mb-1 text-white' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        className={baseClassNames}
        {...rest}
      />
    </div>
  );
};

export default Input;
