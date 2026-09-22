

import { whatGSAMeans } from "../../../../../db/what-gsa-means.js"

export default function WhatGSAMeans() {

  const cardComponents = whatGSAMeans.map((cardInfo, index) => {
    return (
      <div key={index + 1} className="relative bg-wdblue rounded-3xl md:rounded-5xl text-white h-full overflow-hidden text-center transition-all duration-200 scale-95 hover:scale-100 hover:drop-shadow-light3">
        <div className="h-full w-full p-6 cursor-default place-content-center text-lg md:text-3xl font-bold">
          <h3>{cardInfo.heading}</h3>
        </div>
        <div className="absolute top-0 left-0 h-full w-full p-2 cursor-default transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 translate-y-6 hover:translate-y-0 place-content-center bg-gradient-to-b from-wdblue to-[#00e1ff]">
          <p className="p-2 md:p-6 drop-shadow-medium1 text-sm md:text-lg">
            {cardInfo.paragraph}
          ​</p>
        </div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="max-w-9xl mx-auto px-8 py-12 md:p-24 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-6xl font-bold">What the GSA Schedule Means for Government Buyers</h1>
          <p className="text-lg md:text-xl font-medium text-slate-800">
            The GSA Multiple Award Schedule provides an established acquisition path for purchasing commercial products and ​professional services from approved contractors.​
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 h-96 md:h-72">
          {cardComponents}
        </div>
      </div>
      
      
    </div>
  )
}