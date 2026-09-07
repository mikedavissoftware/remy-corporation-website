import FocusAreasCarousel from "./FocusAreasCarousel"

import "./FocusAreas.css"

export default function FocusAreas() {



  return (
    <div className="px-16 py-12 md:pl-16 bg-[url(images/general/bg-logo.jpg)] bg-cover bg-center bg-no-repeat bg-white/60 bg-blend-overlay">
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-wide ">Our Focus Areas</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>

      <FocusAreasCarousel />

      <div className="mouse-scroll-fa-cont">
        <div className="mouse-fa rotate-90"></div>
      </div>

    </div>
  )
}