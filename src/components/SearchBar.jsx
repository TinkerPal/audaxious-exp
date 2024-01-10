import React from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <div className='relative text-[#555656]'>
      <input
        type='text'
        className='h-10 px-5 pr-10 text-sm border-[1.3px] bg-[#01040B] border-[#555656] rounded-[3.5px] focus:outline-none'
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type='submit' className='absolute top-0 right-0 mt-3 mr-4'>
        <svg
          className='w-4 h-4 text-[#555656] fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M21 19l-6-6v-10h-2v10l-6 6-1 1-1-1-6-6v-10h-2v-2h2v-3c0-2.209 1.791-4 4-4s4 1.791 4 4v3h4v2h-4v10l-2 2v1h12v-1l-2-2v-10h-4v-3c0-3.313-2.687-6-6-6s-6 2.687-6 6v3h-2v2h2v10l-6 6-1 1-1-1-6-6v-10h-2v-2h2v-3c0-3.313 2.687-6 6-6s6 2.687 6 6v3h2v2h-2v10l6 6 1 1 1-1 6-6 1-1 1 1 6 6v10h2v2h-2v3h2v2h-2v3z' />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
