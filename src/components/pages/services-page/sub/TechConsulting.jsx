



export default function TechConsulting() {



  return (
    <div className="relative overflow-hidden h-fit px-12 py-16 md:pb-24">

      <div className="absolute inset-0 z-1 bg-slate-200"></div>

      <img
        src="images/services-page/blocks-bg.svg"
        class="absolute hidden md:inline inset-0 w-full h-full object-cover opacity-30 z-2 pointer-events-none"
      />
      <img
        src="images/general/new-icon-2 copy.png"
        class="hidden md:inline absolute -left-32 -top-28 scale-[60%] opacity-[6%] z-2 pointer-events-none blur-sm"
      />

      <img
        src="images/services-page/blocks-bg.svg"
        class="md:hidden absolute -right-28 bottom-0 origin-bottom-right scale-[300%] md:inset-0 md:w-full md:h-full md:object-cover opacity-20 z-2 pointer-events-none"
      />
      <img
        src="images/general/new-icon-2 copy.png"
        class="md:hidden absolute -left-28 -top-24 scale-[60%] md:inset-0 md:w-full md:h-full md:object-cover opacity-[8%] z-2 pointer-events-none blur-sm"
      />

      <div className="relative z-3 mx-auto max-w-7xl">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-darkblue">Technology Consulting</h1>
          <h2 className="text-xl md:text-2xl">Turn <span className="font-semibold">Priorities</span> Into <span className="font-semibold">Progress</span></h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 place-items-around content-start">
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">Enterprise Applications & ERP</h3>
            <p className="">Implementation, upgrades, integrations, and​ optimization for enterprise systems.</p>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">Cloud & Infrastructure​</h3>
            <p className="">Cloud migration, infrastructure modernization, ​performance, and scalability.</p>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">Data & Analytics​</h3>
            <p className="">Data engineering, reporting, business intelligence, ​governance, and visualization.</p>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">Software Development & Applications​</h3>
            <p className="">Application design, development, testing, enhancement ​and maintenance.</p>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">DevOps, Automation & Platform Engineering​</h3>
            <p className="">CI/CD, process automation, infrastructure as code, ​and platform engineering.</p>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-darkblue">Cybersecurity & Network Engineering​</h3>
            <p className="">Cybersecurity, network architecture, identity ​management, compliance, and risk support.</p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}