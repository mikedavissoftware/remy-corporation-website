
import { useState, useEffect, useRef } from "react"

export default function CaseStudy({ index, fileName, text, current }) {

  // Beginning of viewport code
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(index == current)
  const callbackFunction = (entries) => {
    const [ entry ] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
  // Ending of viewport code

  useEffect(() => {
    console.log("useEffect used")
  }, [current])

  return (
    <div className={isVisible ? ("grid grid-cols-1 gap-8 items-center max-w-6xl sm:grid-cols-2 md:mx-auto lg:grid-cols-3 duration-150 animate slide-left") : ("opacity-0")} ref={containerRef}>
      <div className="col-span-1">
        <img src={`images/general/partners/${fileName}`} className="drop-shadow-lg" />
      </div>
      <div className="col-span-2">
        <p>{text}</p>
      </div>
    </div>
  )
}