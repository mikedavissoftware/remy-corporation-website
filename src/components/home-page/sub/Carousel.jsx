import { useState } from "react"
import { useNavigate } from "react-router-dom"

import ServiceCard from "./ServiceCard"


export default function Carousel() {

  let navigate = useNavigate()

  const [card, setCard] = useState(1)

  const numCards = 5

  function changeCard(current, plus) {
    console.log(current)
    if (current == 1 && !plus) {
      setCard(numCards)
      return numCards
    } else if (current == numCards && plus) {
      setCard(1)
      return 1
    } else if (plus) {
      setCard(card + 1)
      return current + 1
    } else {
      setCard(card - 1)
      return current - 1
    }
  }

  return (
    <>
    <div className="carousel carousel-center relative w-full">
      {/* <div className="absolute z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a onClick={() => changeSlide(false)} className="btn btn-circle">❮</a>
        <a onClick={() => changeSlide(true)} className="btn btn-circle">❯</a>
      </div> */}

      <div className="carousel-item relative w-[50vw]"></div>

      <div id="card1" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="card2" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="card3" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="card4" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>
      <div id="card5" className="carousel-item relative">
        <div className="p-4">
          <ServiceCard />
        </div>
      </div>

      <div className="carousel-item relative w-[50vw]"><p></p></div>


    </div>

    <div className="flex w-full justify-center gap-2 py-2">
      <a onClick={() => {navigate(`#card${changeCard(card, false)}`)}} className="btn btn-xs">❮</a>
      <a onClick={() => {navigate(`#card${changeCard(card, true)}`)}} className="btn btn-xs">❯</a>
    </div>
    </>
  )
}