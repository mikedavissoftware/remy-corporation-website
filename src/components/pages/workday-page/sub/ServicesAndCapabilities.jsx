

import { servicesAndCapabilities } from "../../../../../db/services-and-capabilities.js"

export default function ServicesAndCapabilities() {

  const cardComponents = servicesAndCapabilities.map((cardInfo, outerIndex) => {

    const itemComponents = cardInfo.items.map((item, index) => {
      return <h3 key={index + 1} className="text-md md:text-xl font-semibold">{item}</h3>
    })

    return (
      <div key={outerIndex + 1} className="relative h-48 bg-wdblue rounded-b-md rounded-t-3xl md:rounded-t-5xl text-white overflow-hidden text-center transition-all duration-200 scale-95 hover:scale-100 hover:drop-shadow-light3">
        <div className="h-full w-full p-6 cursor-default place-content-center text-lg md:text-3xl font-bold">
          <h3>{cardInfo.heading}</h3>
        </div>
        <div className="absolute top-0 left-0 h-full w-full p-6 cursor-default transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 translate-y-6 hover:translate-y-0 place-content-center bg-gradient-to-b from-wdblue to-[#00e1ff]">
          {itemComponents}
        </div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="max-w-9xl h-fit mx-auto px-8 py-12 md:p-24 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-6xl font-bold">Services and Capabilities​</h1>
          <p className="text-lg md:text-3xl text-slate-800">
            Expertise Across the Workday Platform​
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-6">
          {cardComponents}
        </div>
      </div>
      
      
    </div>
  )
}