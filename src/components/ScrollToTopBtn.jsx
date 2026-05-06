import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTopBtn = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="rounded-full bg-white text-black p-4 font-[fmedium] cursor-pointer"
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;