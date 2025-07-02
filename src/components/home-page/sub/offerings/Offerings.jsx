import { Carousel } from "@material-tailwind/react";

import OfferingSlide from "./OfferingSlide";

import { offerings } from "../../../../../db/offerings"

export default function Offerings() {

  const offeringSlideComponents = offerings.map((offering) => {
    return <OfferingSlide key={offering.id} offering={offering} />
  })

  return (
    // <Carousel className="rounded-xl relative" autoplay="true" autoplayDelay="5000" loop="true" transition={{duration: 1.5}}>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    // </Carousel>
    <Carousel className="relative" autoplay="true" autoplayDelay="5000" loop="true" transition={{duration: 1}}>
      {offeringSlideComponents}
    </Carousel>
  )
}