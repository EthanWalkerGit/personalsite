import './App.css';
import { Home, About, Experience, Projects, Footer, Nav } from './components';

const App = () => {
  return (
    <div className="relative h-screen w-full font-Inter">
      <div className="fixed top-0 left-0 w-full z-20">
        <Nav />
      </div>
      <div className="fixed top-0 left-0 w-full h-full home-container z-0">
        <Home />
      </div>
      <div className="relative z-10 mt-mobileMargin xl:mt-homeMargin">
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;