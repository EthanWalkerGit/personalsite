import './App.css';

function App() {
  return (
    <div className="App">

      {/* Home */}
      <div>
      <h1>
        Hi, I'm Ethan Walker<br />
        I'm a Computer Science student that welcomes<br />
        challenges and the chance to learn something new.
      </h1>
      </div>

      {/* About */}
      <div>

        <div>
          <div>
            <p>Image</p>
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

      {/* Experience */}
      <div>
        <h2>Here's where I've worked at</h2>
        <div>
          <div>
            <h3>Magna International, Windsor, ON</h3>
            <h4>Software Developer Intern (May 2024 - August 2024)</h4>
          </div>
          <div>
            <ul>
              <li>Point one</li>
              <li>Point two</li>
              <li>Point three</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2>Here are my favourite projects</h2>
        <div>
          <div>
            <h3>Project 1</h3>
            <p>Project description</p>
          </div>
          <div>
            <h3>Project 2</h3>
            <p>Project description</p>
          </div>
          <div>
            <h3>Project 3</h3>
            <p>Project description</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div> 

        <div>
          <h4>General</h4>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Experience</li>
          </ul>
        </div>   

        <div>
          <h4>Projects</h4>
          <ul>
            <li>Dr Disc Market</li>
          </ul>
        </div>   

      </div>
      
    </div>
  );
}

export default App;
