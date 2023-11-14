import React, { useState } from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { items } from '../constants/globalConstant';
import { ReactComponent as Arrow } from '../assets/svg/arrow.svg';

const Accordion = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <Arrow /> : <Arrow />}</span>;

        return (
          <div
            key={item.label}
            className='border-t border-[#191A1F] rounded border-x font-Poppins'
          >
            <div
              onClick={() => handleClick(index)}
              className='flex items-center justify-between p-3 mb-4 text-[#E8E8E8] transition-all duration-200 ease-in-out border-[#24343D] border rounded-[8px] cursor-pointer bg-[#060B12]'
            >
              {item.label}
              {icon}
            </div>
            {isExpanded && (
              <div className='p-5 text-white transition-all duration-200 ease-in-out border-b border-[#24343D] bg-[#060B12]'>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
