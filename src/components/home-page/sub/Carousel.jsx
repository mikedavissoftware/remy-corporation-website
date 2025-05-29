import { useState } from "react"
import { useNavigate } from "react-router-dom"

import ServiceCard from "./ServiceCard"


export default function Carousel() {



  return (
    <>
    <div className="carousel carousel-center flex -mx-16 ps-[35vw] pe-[35vw]">

      {/* <div className="carousel-item relative w-[25vw] hidden md:inline"></div> */}

      <div id="card1" className="carousel-item relative scale-90 md:scale-100">
        <ServiceCard />
      </div>
      <div id="card2" className="carousel-item relative scale-90 md:scale-100">
        <ServiceCard />
      </div>
      <div id="card3" className="carousel-item relative scale-90 md:scale-100">
        <ServiceCard />
      </div>
      <div id="card4" className="carousel-item relative scale-90 md:scale-100">
        <ServiceCard />
      </div>
      <div id="card5" className="carousel-item relative scale-90 md:scale-100">
        <ServiceCard />
      </div>

      {/* <div className="carousel-item relative w-[25vw] hidden md:inline"></div> */}

    </div>
    </>
  )
}