import { Timer10 } from "@mui/icons-material"
import { useState, useEffect, useRef } from "react"



export default function CaseStudyTest() {

  const count = useRef(0)
  const timerID = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const [current, setCurrent] = useState(0)

  const letters = ["A","B","C","D","E","F"]

  const counter = () => {
    count.current++
    setCurrent(count.current % letters.length)
  }

  function startTimer() {
    if (timerID.current) return;
    setIsPlaying(true)
    timerID.current = setInterval(counter, 1000)
  }

  function stopTimer() {
    setIsPlaying(false)
    clearInterval(timerID.current)
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
    <div className="block h-48" >
      <p className="text-2xl text-black">{letters[current]}</p>
      <button className="btn" onClick={() => playPause(isPlaying)}>{(isPlaying) ? ("Pause") : ("Play")}</button>
    </div>
  )
}