import "./Dividers.css"

export default function BubbleDownDividerInverted({ yHeight, fillColor, flip }) {
  const angle = () => {
    return((flip) ? (180) : (0))
  }

  return (
    <div
      className=""
      style={{
        bottom: "0",
        left: "0",
        width: "100%",
        overflow: "hidden",
        lineHeight: "0",
        marginTop: `-${yHeight}px`,
        // transform: `translatey(-${yHeight}px)`,
        transformOrigin: "bottom",
        transform: `rotate(${angle()}deg)`,
        paddingTop: "30px"
      }}
    >
      <svg 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          // transform: "translatex(-.5%)",
          height: `${yHeight}px`,
          // transform: "rotate(180deg)",
        }}
      >
        <path 
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
          className="shape-fill origin-bottom scale-y-50 md:scale-y-100"
          fill={fillColor}
          style={{
            filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, .5))"
          }}
        />
      </svg>
    </div>
  )
}