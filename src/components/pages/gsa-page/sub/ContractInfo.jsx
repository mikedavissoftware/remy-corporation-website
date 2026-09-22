

import { contractInfo } from "../../../../../db/contract-info.js"

export default function ContractInfo() {

  const lineComponents = contractInfo.map((line) => {
    const information = () => {
      if (line.email) {
        return <a className="underline text-darkblue hover:text-wdorange transition-all duration-200" href={`mailto:${line.info}`} target="_blank">{line.info}</a>
      } else {
        return line.info
      }
    } 
    return (
      <h3 className=""><span className="font-bold">{line.title}: <br className="md:hidden"/></span>{information()}</h3>
    )
  })

  return (

    <div className="relative">
      <div className="h-[40vh] overflow-hidden hidden md:grid grid-cols-5 z-0">
        <div className="col-span-2 bg-white"></div>
        <div className="relative col-span-3 overflow-hidden">
          <img src="images/gsa-page/gsa-contract-info-reduced.jpg" className="absolute z-[-1] object-cover bottom-0 right-0 w-full origin-bottom h-full"/>
          {/* <div className="absolute w-full h-full bg-gradient-to-r from-white to-transparent to-70%"/> */}
        </div>
      </div>

      <div className="md:hidden h-[67vh] overflow-hidden z-0">
        {/* <div className="bg-white h-[30%] w-full"></div> */}
        <div className="relative overflow-hidden h-full">
          <img src="images/gsa-page/gsa-contract-info-reduced.jpg" className="absolute z-[-1] object-cover object-right top-0 right-0 h-full origin-right"/>
          {/* <div className="absolute w-full h-full bg-gradient-to-b from-white to-transparent"/> */}
        </div>
      </div>

      <div className="absolute top-0 md:top-0 left-0 m-8 p-4 text-black space-y-1 md:w-[60vw] md:min-w-[600px] z-1 bg-white/70 md:bg-white md:drop-shadow-medium2">
        <h2 className="text-2xl md:text-3xl font-bold">Contract Information</h2>
        <hr className="border-[1.5px] border-wdorange rounded-sm w-[40%] md:w-[15%]"/>
        <div className="text-md md:text-lg">
          {lineComponents}
        </div>
      </div>
      <div className="absolute right-0 z-[-1]">
        <img></img>
      </div>
    </div>
  )
}
