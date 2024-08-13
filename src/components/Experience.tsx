const Experience = () => { 
    return (
      <div className="py-16 w-full flex flex-col items-center bg-main">
        <div className="w-full mx-[20px] sm:mx-[70px] md:mx-[120px] lg:w-2/3 xl:w-1/2">
        <div className="m-6 mb-3 font-bold text-3xl">Here's where I've worked at</div>
        <div className="m-6 bg-white rounded-lg">
          <div className="p-7">
          <div>
            <div className="mb-1 font-bold text-2xl text-mainGreen">Magna International, Windsor, ON</div>
            <div className="italic text-lg text-lightText">Software Developer Intern (May 2024 - August 2024)</div>
          </div>
          <div className="mt-2">
            <ul className="list-disc pl-5">
              <li>Developed and maintained web applications using C# and ASP.NET to enhance user experience and streamline data access.</li>
              <li>Leveraged SQL and SQL Server to extract, transform, and load data from relational databases, seamlessly integrating it into ASP.NET web pages using Telerik.</li>
              <li>Developed and optimized multiple stored procedures in SQL Server for database operations and improve application performance.</li>
              <li>Collaborated with cross-functional teams to ensure seamless data flow and website functionality.</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      </div>
    )
}

export default Experience;