import { useRef, useLayoutEffect } from "react"

export default function PartnershipsScrollerMobile({ partnershipImageComponents }) {

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
  const partnershipsSplit = Math.floor(partnershipImageComponents.length / 2)
  const partnershipImageComponentsTop = partnershipImageComponents.slice(0, partnershipsSplit)
  const partnershipImageComponentsBottom = partnershipImageComponents.slice(partnershipsSplit)

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