import React from 'react';
import leaf from '../assets/leaf.png';

interface NavProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProps> = ({ aboutRef, experienceRef, projectsRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-16 bg-card">
      <div className="w-full h-full flex items-center justify-between px-4">
        <img src={leaf} alt="Leaf" className="w-8 h-8 mr-2 cursor-pointer" onClick={() => window.location.reload()} />
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-mainGreen cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</div>
          <div className="text-sm font-medium text-mainGreen cursor-pointer" onClick={() => scrollToSection(experienceRef)}>Experience</div>
          <div className="text-sm font-medium text-mainGreen cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;