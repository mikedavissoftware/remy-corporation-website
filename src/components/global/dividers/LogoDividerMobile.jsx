import { useState, useEffect, useRef } from "react";

export default function LogoDividerMobile() {

  const width = 25
  const gap = 20
  const blur = 0

  const rotation = 60
  const numSteps = 180 / rotation
  const yFactor = 4
  
  const opacity = 10
  const totalWidth = width + gap

  const LogoImage = ({ index }) => {
    const angleAndY = () => {
      const angle = index * rotation
      const currentStep = (angle % 180) / rotation
      const yShift = () => {
        if (Math.floor(angle / 180) % 2 === 0) {
          return yFactor * currentStep
        } else {
          return yFactor * (numSteps - currentStep)
        }
      }
      return [angle, yShift()]
    }
    return (
      <div
        style={{
          transform: `translateY(${(yFactor * numSteps / 2) - angleAndY()[1]}px)`,
        }}
      >
        <img
          key={index}
          src="images/general/remy_icon_alt.png"
          className=""
          style={{
            transform: `translateX(-${totalWidth / 2}px)`,
            height: `${width}px`,
            transform: `rotate(${angleAndY()[0]}deg)`,
            opacity: `${opacity}%`,
            filter: `blur(${blur}px)`
          }}
        />
      </div>
    )
  }
  const createLogoArray = (diffLength, totalLength = 0) => {
    console.log("logo adjustment")
    if (diffLength < 1) {
      console.error("This function should not be called if difference is negative or zero.")
      return []
    } else {
      const logoArray = []
      for (let i = 0; i < diffLength; i++) {
        logoArray.push(<LogoImage key={totalLength + i} index={totalLength + i} />)
      }
      return logoArray
    }
  }

  const [logoComponents, setLogoComponents] = useState(createLogoArray(Math.floor(window.innerWidth / totalWidth)))

  useEffect(() => {
    console.log("resize")
    const updateLogoComponents = () => {
      const newWidthDivisions = Math.floor(window.innerWidth / totalWidth)
      const oldWidthDivisions = logoComponents.length - 2
      const difference = newWidthDivisions - oldWidthDivisions
      if (difference < 0) {
        setLogoComponents(logoComponents.slice(0, newWidthDivisions + 2))
      } else if (difference > 0) {
        setLogoComponents([...logoComponents, ...createLogoArray(difference, logoComponents.length)])
      } else { null }
    }
    // Listen for screen resizing
    window.addEventListener('resize', updateLogoComponents);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', updateLogoComponents);
  }, []);

  return (
    <div
      className={`flex md:hidden space-x-2 z-100`}
      style={{
        transform: `translateY(${64 - width}px)`,
        gap: `${gap}px`,
        // backgroundColor: "#FFF",
        background: "linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,#f2f2ed 90%)"
      }}>
      {logoComponents}
    </div>
  )
}