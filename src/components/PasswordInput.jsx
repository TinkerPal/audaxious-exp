import { useState } from 'react';
import classNames from 'classnames';
import { Eye, EyeOff } from 'react-feather';

const PasswordInput = ({
  name,
  value,
  placeholder,
  label,
  className,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  const baseClassNames = classNames(
    'appearance-none font-Poppins border border-[#424A57] bg-[#04080D] text-[#A6A6A8] rounded-[9px] border-solid w-full h-[49px] px-3 leading-tight focus:outline-none focus:shadow-outline',
    className
  );

  return (
    <div>
      <label className='block mt-8 mb-1 text-white' htmlFor={name}>
        {label}
      </label>
      <div className='relative'>
        <input
          type={`${show ? 'text' : 'password'}`}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          className={baseClassNames}
          {...rest}
        />
        <div
          className='absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer'
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeOff color='#424A57' size={20} />
          ) : (
            <Eye color='#424A57' size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
