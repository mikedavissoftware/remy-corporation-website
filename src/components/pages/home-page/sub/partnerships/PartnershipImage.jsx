import { useState, useEffect, useRef } from "react"



export default function PartnershipImage({ imageObject }) {

  const { id, fileName, initXPosition, speed, scale, zIndex } = imageObject

  // console.log(scale)

  const imgRef = useRef(null)

  const path = `images/general/partners/${fileName}`

  const [xPosition, setXPosition] = useState(initXPosition)

  function step() {
    if (xPosition < 1700) {
      // console.log(position)
      setXPosition(xPosition + speed)
      imgRef.current.style.left = xPosition + "px"; 
      // requestAnimationFrame(step); // Keep looping
    } else {
      setXPosition(-1700)
      // requestAnimationFrame(step);
    }
  }

  const randomize = () => {
    setXPosition(-1000)
    const top = Math.floor(Math.random() * 200)
    imgRef.current.style.top = top + "px"
    const newScale = scale + .5 * Math.random()
    imgRef.current.style.scale = newScale
  }

  useEffect(() => {
    if (imgRef.current) {
      console.log("animation loop")
      requestAnimationFrame(step)
    }
  }, [imgRef.current, xPosition])

  return (
    <>
    <button className="p-4 mx-12 rounded-md bg-slate-400" onClick={() => randomize()}>Reset</button>
    <p className="text-xl">{xPosition}</p>
    <img id={`img${id}`} ref={imgRef} src={path} className={`relative z-${zIndex} scale-[${scale}%]`} />
    {/* <img src={proxy + partnerFiles[0]} id="img1" className={`partnership-image absolute w-[30vw] left-[${position + 200}px]`} /> */}
    </>
  )
}