import React from 'react';
import leaf from '../assets/leaf.png';

const Nav = () => {
  return (
    <div className="h-16 bg-card">
      <div className="w-full h-full flex items-center justify-between px-4">
        <img src={leaf} alt="Leaf" className="w-8 h-8 mr-2 cursor-pointer" />
        <div className="flex items-center space-x-4">
          <a href="#about" className="text-sm font-medium text-mainGreen cursor-pointer no-underline">About</a>
          <a href="#experience" className="text-sm font-medium text-mainGreen cursor-pointer no-underline">Experience</a>
          <a href="#projects" className="text-sm font-medium text-mainGreen cursor-pointer no-underline">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

