

import Industry from "./Industry"

import * as industries from "../../../../../../db/industries"

export default function Industries() {

  

  const industriesSorted = Object.values(industries).sort((a, b) => {
    return a.id - b.id
  })

  console.log(industriesSorted)

  const industryComponents = industriesSorted.map((industry) => {
    return <Industry industry={industry} />
  })

  return (
    <div className="bg-[radial-gradient(#ffffff,#DCDECD)] px-8 py-16 md:py-8 md:pb-12 md:py-12 md:pb-16 md:px-16" >
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-wide ">Supported Industries</h1>

      <hr className="border border-[1.5px] border-wdorange rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-16 max-w-7xl mx-auto place-content-around">
        {industryComponents}
      </div>
    </div>
  )
}