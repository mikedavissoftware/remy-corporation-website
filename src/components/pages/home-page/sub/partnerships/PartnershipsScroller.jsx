import { useRef, useLayoutEffect } from "react"

import PartnershipImage from "./PartnershipImage"

import { partnerships } from "../../../../../../db/partnerships"
import "./AutoScrollingPartnerships.css"

export default function PartnershipsScroller() {

  const trackRef = useRef(null)
  const groupRef = useRef(null)

  const updateLoopDistance = () => {
    console.log("resize")
    if (trackRef.current && groupRef.current) {
      // Measures the exact pixel width of one complete set of images
      const width = groupRef.current.offsetWidth;
      // Passes the value directly into your CSS keyframes variable
      trackRef.current.style.setProperty('--loop-distance', `-${width}px`);
    }
  };

  // const updateImage

  useLayoutEffect(() => {
    // Run on initial mount
    updateLoopDistance();

    // Listen for screen resizing
    window.addEventListener('resize', updateLoopDistance);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', updateLoopDistance);
  }, []);

  // Replace these with your actual image URLs/data
  const partnerShipImageComponentsDesktop = partnerships.map((partnership) => {
    return <a className="scroll-link"><img src={`images/general/partners/${partnership.fileName}`} className="scroll-image h-auto w-48" /></a>
  })

  return (
    <div className="scroll-container" >
      <div className="scroll-track" ref={trackRef}>
        <div className="track-group !hidden md:!flex" ref={groupRef}>
          {partnerShipImageComponentsDesktop}
        </div>
        <div className="track-group !hidden md:!flex" aria-hidden="true">
          {partnerShipImageComponentsDesktop}
        </div>
      </div>
    </div>
  )
}