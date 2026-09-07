import { useRef, useLayoutEffect } from "react"

import "./AutoScrollingPartnerships.css"

export default function PartnershipsScrollerMobile({ partnerships }) {

  const trackTopRef = useRef(null)
  const trackBottomRef = useRef(null)
  const groupTopRef = useRef(null)
  const groupBottomRef = useRef(null)

  const updateLoopDistance = () => {
    if (trackTopRef.current && trackBottomRef.current && groupTopRef.current && groupBottomRef.current) {
      // Measures the exact pixel width of one complete set of images
      const widthTop = groupTopRef.current.offsetWidth;
      const widthBottom = groupBottomRef.current.offsetWidth;
      // Passes the value directly into your CSS keyframes variable
      trackTopRef.current.style.setProperty('--loop-r-l-distance', `-${widthTop}px`);
      trackBottomRef.current.style.setProperty('--loop-l-r-distance', `-${widthBottom}px`);
    }
  };

  useLayoutEffect(() => {
    // Run on initial mount
    updateLoopDistance();

    // Listen for screen resizing
    window.addEventListener('resize', updateLoopDistance);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', updateLoopDistance);
  }, []);

  // Replace these with your actual image URLs/data
  const partnershipsSplit = Math.floor(partnerships.length / 2)
  const partnershipImageComponentsTop = partnerships.slice(0, partnershipsSplit).map((partnership, index) => {
    return <a className="scroll-link" key={index + 1}><img src={`images/partners/${partnership.fileName}`} className="scroll-image h-auto w-36 !grayscale opacity-75" /></a>
  })
  const partnershipImageComponentsBottom = partnerships.slice(partnershipsSplit).map((partnership, index) => {
    return <a className="scroll-link" key={index + 1}><img src={`images/partners/${partnership.fileName}`} className="scroll-image h-auto w-36 !grayscale opacity-75" /></a>
  })

  return (
    <div className="scroll-container my-6 !flex md:!hidden" >
      <div className="scroll-track-mobile-regular" ref={trackTopRef}>
        <div className="track-group" ref={groupTopRef}>
          {partnershipImageComponentsTop}
        </div>
        <div className="track-group" aria-hidden="true">
          {partnershipImageComponentsTop}
        </div>
      </div>
      <div className="scroll-track-mobile-reverse mt-4" ref={trackBottomRef}>
        {/* <div className="track-group" ref={groupBottomRef}>
          {partnershipImageComponentsBottom}
        </div> */}
        <div className="track-group" aria-hidden="true">
          {partnershipImageComponentsBottom}
        </div>
        <div className="track-group" ref={groupBottomRef}>
          {partnershipImageComponentsBottom}
        </div>
      </div>
    </div>
  )
}