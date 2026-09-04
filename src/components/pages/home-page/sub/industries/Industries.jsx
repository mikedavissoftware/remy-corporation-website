

import Industry from "./Industry"

export default function Industries() {

  // const industries = [Industry]

  return (
    <div className="bg-[radial-gradient(#ffffff,#DCDECD)] py-6 px-12" >
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-wide ">Industries</h1>

      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Industry/>
      </div>
    </div>
  )
}