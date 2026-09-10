import { useRef, useLayoutEffect } from "react"

export default function PartnershipsScroller({ partnershipImageComponents }) {

  const trackRef = useRef(null)
  const groupRef = useRef(null)

  const updateLoopDistance = () => {
    if (trackRef.current && groupRef.current) {
      // Measures the exact pixel width of one complete set of images
      const width = groupRef.current.offsetWidth;
      // Passes the value directly into your CSS keyframes variable
      trackRef.current.style.setProperty('--loop-r-l-distance', `-${width}px`);
    }
  };

  useLayoutEffect(() => {
    // console.log("resizeeee")
    // Run on initial mount
    updateLoopDistance();

    // Listen for screen resizing
    window.addEventListener('resize', updateLoopDistance);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', updateLoopDistance);
  }, []);

  return (
    <div className="scroll-container my-6 !hidden md:!flex saturate-50 drop-shadow-md" >
      <div className="scroll-track" ref={trackRef}>
        <div className="track-group" ref={groupRef}>
          {partnershipImageComponents}
        </div>
        <div className="track-group" aria-hidden="true">
          {partnershipImageComponents}
        </div>
      </div>
    </div>
  )
}