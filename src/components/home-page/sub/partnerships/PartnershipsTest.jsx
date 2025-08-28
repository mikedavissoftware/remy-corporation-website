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

  const htmlText = "Lorem ipsum dolor sit amet, consectetur adipiscing <strong>elit</strong>, sed do eiusmod tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const caseStudyComponents = partnerFiles.map((partnerFile, index) => {
    return <CaseStudy key={index} fileName={partnerFile} htmlText={htmlText} />
  })
  
  const interval = 3000
  const transitionDuration = 500
  const xTranslation = 4

  const startFader = () => {
    fadeInTimeOut.current = setTimeout(() => setIsVisible(true), transitionDuration)
    fadeOutTimeOut.current = setTimeout(() => setIsVisible(false), interval - transitionDuration)
  }

  const counter = (next) => {
    if (next) {
      count.current++
      setCurrent(count.current % partnerFiles.length)

      if (isPlaying) {
        startFader()
      }
    } else {
      count.current--
      setCurrent(count.current % partnerFiles.length)
    }
  }

  function startTimer() {
    if (timerID.current) return;

    setIsPlaying(true)

    startFader()
    timerID.current = setInterval(() => counter(true), interval) // setInterval expects a fxn reference as its first argument, not an actual fxn call, so passing the arrow fxn with the specific fxn call inside it will allow setInterval to repeatedly execute the specific fxn call, instead of only executing the singular time as in the scenario where the specific fxn call is not house "anonymously" within the arrow fxn
  }

  function stopTimer() {
    setIsPlaying(false)
    clearInterval(timerID.current)
    clearTimeout(fadeInTimeOut.current)
    clearTimeout(fadeOutTimeOut.current)
    timerID.current = null
  }

  useEffect(() => {
    // console.log("used effect")
    startTimer()

    return () => { // cleanup function runs on component unmount, which responsibly handles resources by clearing timers, removing event listeners, etc
      // console.log("cleanup function")
      stopTimer()
    }
  }, [])

  function playPause() {

    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      startTimer()
    }

  }

  function previous() {
    stopTimer()
    counter(false)
  }

  function next() {
    stopTimer()
    counter(true)
  }

  return (
    <div className="p-8 bg-[radial-gradient(#ffffff,#DCDECD)] md:p-16" >
      <h1 className="text-center text-5xl font-semibold tracking-wide">Partnerships</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>
      
      <div className={`transition-all transition-translation duration-${transitionDuration} ${(isVisible) ? (`opacity-100`) : (`opacity-0 -translate-x-${xTranslation}`)}`}>
        {caseStudyComponents[current]}
      </div>

      <div className="space-x-4 drop-shadow-medium3">
        <button className="btn" onClick={() => playPause(isPlaying)}>{(isPlaying) ? ("Pause") : ("Play")}</button>
        <button className="btn btn-warning" onClick={() => previous()}>Prev</button>
        <button className="btn btn-success" onClick={() => next()}>Next</button>
      </div>
    </div>
  )
}