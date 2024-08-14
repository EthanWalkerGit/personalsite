const Footer = () => {
    return (
      <div className="pb-16 w-full flex flex-col items-center bg-main">
        <div className="w-full mx-[20px] sm:mx-[70px] md:mx-[120px] lg:w-2/3 xl:w-1/2">

        <div className="pt-8 flex flex-row justify-around items-top">
        <div>
          <div className="font-bold pb-1">Contact</div>
          <ul className="text-mainGreen">
          <li className="pb-1">
            <a href="mailto:ethanwalker576@gmail.com" className="hover:cursor-pointer">
              Email
            </a>
          </li>
            <li className="pb-1">
            <a href="https://www.linkedin.com/in/ethanwalker576" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
              Linkedin
            </a>
          </li>
          <li className="pb-1">
            <a href="https://github.com/EthanWalkerGit" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
              Github
            </a>
          </li>
          </ul>
        </div> 

        <div>
          <div className="font-bold pb-1">General</div>
            <ul className="text-mainGreen text-md">
              <li className="pb-1">
                <a href="#home" className="hover:cursor-pointer">
                  Home
                </a>
              </li>
              <li className="pb-1">
                <a href="#experience" className="hover:cursor-pointer">
                  Experience
                </a>
              </li>
              <li className="pb-1">
                <a href="#projects" className="hover:cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
          </div>   

        <div>
          <div className="font-bold pb-1">Projects</div>
          <ul className="text-mainGreen">
            <li className="pb-1">
              <a href="https://drdiscmarket.ca" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline">
                drdiscmarket.ca
              </a>
            </li>
            <li className="pb-1">
              <a href="https://ethanwalker.ca" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline">
                ethanwalker.ca
              </a>
            </li>
          </ul>
        </div>   
      </div>

      </div>
      </div>
    )
}

export default Footer;