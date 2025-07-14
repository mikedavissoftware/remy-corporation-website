import { useState, useEffect, useRef } from "react"

import CaseStudy from "./CaseStudy"

export default function Partnerships() {

  const count = useRef(0)
  const timerID = useRef(null)
  const fadeInTimeOut = useRef(null)
  const fadeOutTimeOut = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const [current, setCurrent] = useState(0)

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
    return <CaseStudy key={index} fileName={partnerFile} text={text} />
  })
  
  const interval = 5000
  const transitionDuration = 500
  const xTranslation = 8

  const startFader = () => {
    fadeInTimeOut.current = setTimeout(() => setIsVisible(true), transitionDuration)
    fadeOutTimeOut.current = setTimeout(() => setIsVisible(false), interval - transitionDuration)
  }

  const counter = () => {
    // console.log("counter activated")
    count.current++
    setCurrent(count.current % partnerFiles.length)
    startFader()
  }

  function startTimer() {
    if (timerID.current) return;
    setIsPlaying(true)

    startFader()
    timerID.current = setInterval(counter, interval)
  }

  function stopTimer() {
    setIsPlaying(false)
    clearInterval(timerID.current)
    clearTimeout(fadeInTimeOut.current)
    clearTimeout(fadeOutTimeOut.current)
    timerID.current = null
  }

  useEffect(() => {
    console.log("used effect")
    startTimer()

    return () => {
      console.log("cleanup function")
      stopTimer()
    }
  }, [])

  function playPause(playing) {
    console.log(playing)
    if (playing) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  return (
    <div className="p-8 bg-[radial-gradient(#ffffff,#DCDECD)] md:p-16" >
      <h1 className="text-center text-5xl font-semibold tracking-wide">Partnerships</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>
      
      <div className={`transition-all transition-translation duration-${transitionDuration} ${(isVisible) ? (`opacity-100`) : (`opacity-0 -translate-x-${xTranslation}`)}`}>
        {caseStudyComponents[current]}
      </div>

      <button className="btn" onClick={() => playPause(isPlaying)}>{(isPlaying) ? ("Pause") : ("Play")}</button>
    </div>
  )
}