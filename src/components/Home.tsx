const Home = () => {
  return (
    <div className="mt-16 w-full flex items-center justify-center bg-main">
      <div className="w-full mx-[20px] sm:mx-[70px] md:mx-[120px] lg:w-2/3 xl:w-1/2 py-7vh xl:py-23vh">
        <div className="text-left ml-4">
          <div className="max-w-xl">  
            <div className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-light">
              Hi, I'm <span className="font-medium text-mainGreen">Ethan Walker</span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-light">
              I'm a Software Developer that welcomes
              challenges and the chance to learn something new.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default Home;