import { Carousel } from "@material-tailwind/react";

import OfferingSlide from "../OfferingSlide";

import { offerings } from "../../../../../../../db/offerings"

export default function Offerings() {

  const offeringSlideComponents = offerings.map((offering) => {
    return <OfferingSlide key={offering.id} offering={offering} />
  })

  return (
    <Carousel className="relative z-0" autoplay={true} autoplayDelay={5000} loop={true} transition={{duration: 1}} prevArrow={() => <></>} nextArrow={() => <></>}>
      {offeringSlideComponents}
    </Carousel>
  )
}