import { useContext } from "react"

import { GlobalContext } from "../../../App"



export default function FocusAreaCard({ cardInfo }) {

  const { currentModal, setCurrentModal } = useContext(GlobalContext)

  const bulletComponents = cardInfo.bullets.map((bullet, index) => {
    return (
      <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{bullet}</span>
      </li>
    )
  })

  return (
    <div className="carousel-item relative scale-95 md:scale-100 md:p-0">
      <div className="snap-card-vanilla animate fade card w-72 image-full bg-base-100 drop-shadow-medium3 m-2 md:m-6 inline-block flex-col">
        <figure>
          <img
            src={cardInfo.image}
            alt="Shoes"
            className="opacity-50"
          />
        </figure>
        <div className="card-body">
          {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
          <div className="flex mx-auto">
            <h2 className="text-xl font-bold">{cardInfo.industry}</h2>
            {/* <span className="text-xl">$29/mo</span> */}
          </div>
          <ul className="my-6 flex flex-col gap-2 text-sm">
            {bulletComponents}
          </ul>
          <div className="mt-auto">
            <button className="btn btn-primary btn-block" onClick={()=>{setCurrentModal(cardInfo.cssid); document.getElementById(`focus-areas-modal`).showModal()}}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}