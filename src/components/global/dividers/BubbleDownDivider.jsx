import "./Dividers.css"

export default function BubbleDownDivider({ xScale, yHeight, xOffset, fillColor }) {
  return (
    <div
      className=""
      style={{
        top: "0",
        left: "0",
        width: "100%",
        overflow: "hidden",
        lineHeight: "0",
        marginBottom: `-${yHeight}px`
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
          width: "101%",
          transform: "translatex(-.5%)",
          height: `${yHeight}px`,
          mixBlendMode: "lighten",
          overflow: "visible"
        }}
      >
        <path 
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
          className="shape-fill origin-top scale-y-50 md:scale-y-100"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}