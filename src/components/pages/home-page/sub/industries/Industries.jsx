

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
    <div className="bg-[radial-gradient(#ffffff,#DCDECD)] px-8 py-8 pb-12 md:py-12 md:px-16" >
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-wide ">Industries</h1>

      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto place-content-around">
        {industryComponents}
      </div>
    </div>
  )
}