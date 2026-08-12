import { useRef, useState, useEffect } from "react"



export default function AboutUs() {

  // Beginning of viewport code
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)
  const callbackFunction = (entries) => {
    const [ entry ] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
  // Ending of viewport code

  return (
    <div className={(isVisible) ? ("bg-[#DCDECD] animate delay-1") : ("d-none")} ref={containerRef}>
      
      <div className="px-8 py-16 sm:px-16 sm:pl-0 bg-white bg-opacity-65">
        <div>
          <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-wide">About Us</h1>
        </div>
        <hr className="border border-[1.5px] border-wdorange rounded-sm mx-auto my-8 w-[6%] sm:w-[3%]"/>
        <div className="sm:grid grid-cols-5 gap-x-16 max-w-5xl mx-auto" >
          <div className="col-start-1 col-span-2 overflow-visible place-items-end sm:ml-[-40px]">
            <img src="images/home/home-about-image.png" className=""/>
          </div>
          <div className="col-start-3 col-span-3 prose-md md:prose-lg">
            <p className="mt-6 md:mt-0">
              Founded in 1999, Remy Corporation is a trusted workforce solutions partner connecting organizations with exceptional technology and business professionals across North America and beyond. We help clients build high performing teams by delivering the right expertise at every stage of their business, from strategic initiatives and enterprise transformations to ongoing operational support.
            </p>
            <p className="mt-6 md:mt-8">
              Our capabilities extend far beyond traditional staffing. As a certified Workday and Oracle partner, Remy provides specialized consulting, project-based solutions, managed services, executive search, payrolling, and access to highly skilled professionals across today's most in demand technologies.
            </p>
            <p className="mt-6 md:mt-8">
              What sets Remy apart is our commitment to building lasting partnerships. We combine industry expertise, a relationship first approach, and a relentless focus on quality to deliver talent and solutions that create measurable business impact.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}