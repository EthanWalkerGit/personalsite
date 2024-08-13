import './App.css';
import { Home, About, Experience, Projects, Footer } from './components';

function App() {
  return (
    <div className="relative h-screen w-full font-Inter bg-main">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Home />
      </div>
      <div className="relative z-10 pt-mobilePadding md:pt-homePadding">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;