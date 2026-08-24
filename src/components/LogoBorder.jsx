import { useState, useEffect, useRef } from "react";

export default function LogoBorder() {

  const width = 25
  const gap = 30
  const blur = 1
  const rotation = 15
  const opacity = 15
  const totalWidth = width + gap

  const LogoImage = ({ index }) => {
    return (
      <img
        key={index}
        src="images/general/remy_icon_alt.png"
        className=""
        style={{
          height: `${width}px`,
          transform: `rotate(${rotation}deg)`,
          opacity: `${opacity}%`,
          filter: `blur(${blur}px)`
        }}
      />
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
        logoArray.push(<LogoImage key={totalLength + i} />)
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
      className={`flex space-x-2`}
      style={{
        gap: `${gap}px`,
        transform: `translateY(${64 - width / 2}px) translateX(-${totalWidth / 2}px)`,
        backgroundColor: "#FFF",
        background: "linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%,rgba(255, 255, 255, 1) 100%)"
      }}>
      {logoComponents}
    </div>
  )
}