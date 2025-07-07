import { useState, useEffect, useRef } from "react"

import CaseStudy from "./CaseStudy"

export default function Partnerships() {

  const counter = useRef(0)

  const [current, setCurrent] = useState(0)

  const isPlaying = useRef(true)

  function increment() {
    counter.current++
    console.log(counter.current)
  }

  setInterval(increment, 5000)

  useEffect(() => {
    console.log("useEffect")
  }, [counter])

  function handleClick() {
    console.log("before click: ", )
    isPlaying.current = !isPlaying.current
  }

  const partnerFiles = [
    "google-cloud-copy.png",
    "gsa-contract-holder-copy.png",
    "oracle-gold-partner.png",
    "people-soft.png",
    "sap-copy.png",
    "workday-services-partner-copy.png",
  ]

  const text = "ayyyy"

  const caseStudyComponents = partnerFiles.map((partnerFile, index) => {
    return <CaseStudy key={index} index={index} fileName={partnerFile} text={text} current={counter.current} />
  })

  return (
    <div className="p-8 bg-[radial-gradient(#ffffff,#DCDECD)] md:p-16" >
      <h1 className="text-center text-5xl font-semibold tracking-wide">Partnerships</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>
      
        {caseStudyComponents}

      <button onClick={handleClick} className="btn m-4">Stop Timeout</button>
    </div>
  )
}