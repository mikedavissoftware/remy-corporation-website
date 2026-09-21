import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function PartnershipOverview() {



  return (
    <div className="bg-[#eeedec]">
      <div className="max-w-9xl mx-auto px-8 md:px-16 py-12 md:py-20 grid grid-cols-1 md:grid-cols-8 gap-x-12 items-center text-white">

        <div className="md:col-span-3 mb-12 md:m-0">
          <img src="images/workday-page/workday-cartoon.png" className="w-full h-auto drop-shadow-light3"/>
        </div>

        <div className="space-y-3 md:space-y-5 md:col-span-5 text-center md:text-left">
          <h2 className="text-lg md:text-2xl mb-6 font-medium tracking-widest text-wdorange drop-shadow-md uppercase">Workday Services Partner</h2>
          <h1 className="text-3xl md:text-6xl font-bold text-wdbluepastel">Our Partnership</h1>
          <div className="space-y-6 !mt-6">
            <p className="text-lg md:text-xl text-slate-800">
              As a Workday Services Partner since 2019, Remy provides specialized Workday consulting services across implementation, optimization, integrations, reporting, security, testing, and postproduction support. ​
            </p>
            <p className="text-lg md:text-xl text-slate-800">
              We help organizations improve existing configurations, launch new functionality, resolve production issues, and explore practical uses of artificial intelligence within their Workday environment. ​
            </p>
            <p className="text-lg md:text-xl text-slate-800">
              From an individual Workday consultant to a dedicated project team or ongoing AMS support, every engagement is built around the client’s systems, priorities, and goals. ​
            </p>
          </div>
        </div>

      </div>
    </div>
    
  )
}