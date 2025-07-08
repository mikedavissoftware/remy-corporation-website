import { useState, useEffect, useRef } from "react"



export default function CaseStudyTest() {

  const count = useRef(0)

  const [current, setCurrent] = useState(0)

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]

  const counter = () => {
    count.current++
    setCurrent(count.current % letters.length)
  }

  let timer
  function startTimer() {
    timer = setInterval(counter, 3000)
  }

  useEffect(() => {
    startTimer()
  }, [])

  function resetTimer() {
    clearInterval(timer)
    startTimer()
  }

  return (
    <div className="block h-48" >
      <p className="text-2xl text-black">{letters[current]}</p>
      <button className="btn" onClick={resetTimer}>count</button>
    </div>
  )
}