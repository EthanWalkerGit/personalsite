import React, { useRef } from 'react';
import './App.css';
import { Home, About, Experience, Projects, Footer, Nav } from './components';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen w-full font-Inter">
      <div className="fixed top-0 left-0 w-full z-20">
        <Nav aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
      </div>
      <div className="fixed top-0 left-0 w-full h-full home-container z-0">
        <Home />
      </div>
      <div className="relative z-10 mt-mobileMargin xl:mt-homeMargin">
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;