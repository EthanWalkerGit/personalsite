import React from 'react';
import leaf from '../assets/leaf.png';

const Nav = () => {
  return (
    <div className="h-16 bg-card">
      <div className="w-full h-full flex items-center justify-between px-4">
        <img src={leaf} alt="Leaf" className="w-8 h-8 mr-2 cursor-pointer" />
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-mainGreen cursor-pointer">About</div>
          <div className="text-sm font-medium text-mainGreen cursor-pointer">Experience</div>
          <div className="text-sm font-medium text-mainGreen cursor-pointer">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;