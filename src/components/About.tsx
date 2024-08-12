import Hiking from '../assets/about.jpg';

const About = () => {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="w-full px-[20px] md:w-1/2 py-2/3vh border-2 border-red-500 flex items-center justify-center">

          <div>
            <div>
            <img src={Hiking} alt="Profile" className="w-32 h-32 " /> {/* Adjust the class names as needed */}
            </div>
            <div>
              <p>Ethan Walker</p>
              <p>ethanwalker576@gmail.com</p>
              <div>
                <p>Linkedin</p>
                <p>Github</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Who am I?</h2>
              <p>
              Hello! I'm Ethan, a Software Developer based in Windsor, ON who's experienced in taking fullstack applications from scratch to production.
              I'm currently attending the University of Windsor as a Computer Science major and have just finished an internship at Magna International.
              Over the last year, I've had the opportunity to develop for Magna, work on my own projects and explore different technologies. My work includes developing web apps, mobile apps, working with relational databases, and implementing data solutions.
              </p>
          </div>

        </div>
      </div>
    )
}

export default About;