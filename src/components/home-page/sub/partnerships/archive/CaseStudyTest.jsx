import { Timer10 } from "@mui/icons-material"
import { useState, useEffect, useRef } from "react"



export default function CaseStudyTest() {

  const count = useRef(-1)
  const timerID = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  const partnerFiles = [
    "google-cloud-copy.png",
    "gsa-contract-holder-copy.png",
    "oracle-gold-partner.png",
    "people-soft.png",
    "sap-copy.png",
    "workday-services-partner-copy.png",
  ]
  
  const interval = 5000
  const denominator = 10
  const transitionDuration = Math.floor(interval / denominator)

  const counter = () => {
    console.log("counter activated")
    setTimeout(() => setIsVisible(true), Math.floor(transitionDuration))
    setTimeout(() => setIsVisible(false), Math.floor(interval - transitionDuration))
    count.current++
    setCurrent(count.current % partnerFiles.length)
  }

  function startTimer() {
    if (timerID.current) return;
    setIsPlaying(true)

    timerID.current = setInterval(counter, interval)
  }

  function stopTimer() {
    setIsPlaying(false)
    clearInterval(timerID.current)
    timerID.current = null
  }

  useEffect(() => {
    console.log("used effect")
    counter
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
    <div className="block h-48" >
      <p className="text-2xl text-black">{partnerFiles[current]}</p>
      <button className="btn" onClick={() => playPause(isPlaying)}>{(isPlaying) ? ("Pause") : ("Play")}</button>
    </div>
  )
}