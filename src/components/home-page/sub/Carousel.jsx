import { useState } from "react"
import { useNavigate } from "react-router-dom"

import FocusAreaCard from "./FocusAreaCard"

import { focusAreas } from "../../../../db/focus-areas"


export default function Carousel() {

  console.log(focusAreas[0].industry)

  const focusAreasComponents = focusAreas.map((focusArea) => {
    return <FocusAreaCard key={focusArea.id} cardInfo={focusArea} />
  })

  return (
    <>
    <div className="carousel-vanilla flex -mx-16 ps-[5vw] pe-[5vw]">

      {/* <div className="carousel-item relative w-[25vw] hidden md:inline"></div> */}

      {focusAreasComponents}

      {/* <div className="carousel-item relative w-[25vw] hidden md:inline"></div> */}

    </div>
    </>
  )
}