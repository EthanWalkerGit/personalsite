import Hiking from '../assets/about3.jpg';
import linkedIn from '../assets/linkedin.png';
import github from '../assets/github.png';

const About = () => {
  return (
    <div className="py-10 md:py-14 w-full flex items-center justify-center bg-card">
      <div className="w-full mx-[20px] sm:mx-[70px] md:mx-[90px] lg:w-2/3 xl:w-1/2">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="m-3">
            <div>
              <img src={Hiking} alt="Profile" className="rounded-t-lg max-w-[300px]" />
            </div>
            <div className="py-3 max-w-[300px] bg-white rounded-b-lg h-35 flex flex-col justify-center items-center">
              <div className="font-bold text-xl">Ethan Walker</div>
              <div className="italic">ethanwalker576@gmail.com</div>
              <div className="flex flex-row items-center">
                <a href="https://www.linkedin.com/in/ethanwalker576/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="LinkedIn" className="w-6 h-6 m-3" />
                </a>
                <a href="https://github.com/EthanWalkerGit" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="w-6 h-6 m-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="mb-4 font-bold text-center md:text-left text-2xl md:text-3xl">Who am I?</div>
            <div className="font-normal text-xl">
              Hello! I'm Ethan, a Software Developer based in <span className="font-bold text-mainGreen">Windsor, ON</span> who's experienced in taking fullstack applications from scratch to production.<br /><br />
              I'm currently attending the <span className="font-bold text-mainGreen">University of Windsor</span> as a Computer Science major and have just finished an internship at Magna International.<br /><br />
              Over the last year, I've had the opportunity to develop for <span className="font-bold text-mainGreen">Magna International</span>, work on my own projects and explore different technologies. My work includes developing web apps, mobile apps, working with relational databases, and implementing data solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;