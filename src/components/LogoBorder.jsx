import { useState, useEffect, useRef } from "react";

export default function LogoBorder() {

  const width = 40
  const gap = 10
  const blur = 1
  const rotation = 45
  const totalWidth = width + gap

  const LogoImage = ({ index }) => {
    return <img key={index} src="images/general/new-icon-2 copy.png" width={`${width}px`} className={`rotate-${rotation}`} />
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
    <div className={`flex gap-x-[${gap}px] space-x-2 opacity-30 blur-[${blur}px] translate-y-[42px] -translate-x-[${(totalWidth / 2).toString()}px]`}>
      {logoComponents}
    </div>
  )
}