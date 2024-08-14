const Projects = () => {
    return (
      <div className="py-12 w-full flex flex-col items-center bg-card">
        <div className="w-full mx-[20px] sm:mx-[70px] md:mx-[120px] lg:w-2/3 xl:w-1/2">
        <div className="m-6 mb-3 font-bold text-3xl">Here are my favourite projects</div>
        <div className="m-6 bg-white rounded-lg">
        <div className="p-7">
          <div>
            <div className="mb-1 font-bold text-2xl text-mainGreen">
            <a href="https://drdiscmarket.ca" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
              drdiscmarket.ca
            </a>
          </div>
            <div className="pl-1 italic text-lg text-lightText">Fullstack MERN e-commerce website with user authentication.</div>
            <div>
              <ul className="list-none custom-list">
                <li>REACT</li>
                <li>EXPRESS</li>
                <li>NODE.JS</li>
                <li>MONGODB</li>
                <li>TAILWIND CSS</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="m-6 bg-white rounded-lg">
          <div className="p-7">
            <div className="mb-1 font-bold text-2xl text-mainGreen">
            <a href="https://ethanwalker.ca" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
              ethanwalker.ca
            </a>
            </div>
            <div className="pl-1 italic text-lg text-lightText">Personal portfolio using React, Tailwind CSS and Typescript</div>
            <ul className="list-none custom-list">
                <li>REACT</li>
                <li>TAILWIND CSS</li>
                <li>TYPESCRIPT</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Projects;