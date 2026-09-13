import { Link } from "react-router-dom"



export default function ServiceBadges() {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-y-8 md:gap-8 md:mt-4 mb-12 mx-4 md:mx-12 lg:mx-auto max-w-4xl place-items-center drop-shadow-light1" >
      <Link to="" className="w-32 md:w-auto col-span-1 mx-auto transition-all duration-300 scale-90 hover:scale-100 hover:brightness-125 hover:contrast-110 hover:opacity-85" >
        <img src="images/service-partner-badges/Workday-Services-Partner-Logo copy.png" className="" />
      </Link>
      <Link to="" className="md:w-auto md:h-auto col-span-1 md:col-span-2 transition-all duration-300 scale-90 hover:scale-100 hover:brightness-125 hover:contrast-110 hover:opacity-90" >
        <img src="images/service-partner-badges/Oracle-Partner-Logo-color copy.png" className="" />
      </Link>
      <Link to="" className="w-auto col-span-1 md:col-span-2 transition-all duration-300 scale-90 hover:scale-100 hover:brightness-110 hover:contrast-110 hover:opacity-90" >
        <img src="images/service-partner-badges/servicenow-partner-logo copy 2.png" className="" />
      </Link>
      <Link to="" className="w-60 md:w-auto col-span-1 md:col-span-2 transition-all duration-300 scale-90 hover:scale-100 hover:brightness-125 hover:contrast-110 hover:opacity-90" >
        <img src="images/service-partner-badges/wb-GSA-MAS copy.png" className="" />
      </Link>
    </div>
  )
}