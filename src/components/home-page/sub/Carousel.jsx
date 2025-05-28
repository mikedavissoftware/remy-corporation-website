import { useState } from "react"
import { useNavigate } from "react-router-dom"

import ServiceCard from "./ServiceCard"


export default function Carousel() {

  // const [slide, setSlide] = useState(1)

  // let navigate = useNavigate()

  // function changeSlide(plus) {
  //   if (0 < slide < 10) {
  //     (plus) ? (setSlide(slide + 1)) : (setSlide(slide - 1))
  //   } else if (slide == 1) {
  //     if (!plus) {
  //       setSlide(10)
  //     }
  //   } else {
  //     if (plus) {
  //       setSlide(0)
  //     }
  //   }

  //   navigate(`/#slide${slide}`)
  // }

  return (
    <>
    <div className="carousel carousel-center relative w-full">
      {/* <div className="absolute z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a onClick={() => changeSlide(false)} className="btn btn-circle">❮</a>
        <a onClick={() => changeSlide(true)} className="btn btn-circle">❯</a>
      </div> */}

      <div className="carousel-item relative w-[50vw]"><p></p></div>

      <div id="#slide1" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="#slide3" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="#slide4" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="#slide5" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="#slide6" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>

      <div className="carousel-item relative w-[50vw]"><p></p></div>


    </div>

    <div className="flex w-full justify-center gap-2 py-2">
      <a href="#slide1" className="btn btn-xs">❮</a>
      <a href="#slide2" className="btn btn-xs">❯</a>
    </div>
    </>
  )
}