import { useState } from "react"



export default function PartnershipsScroller() {

  const proxy = "images/general/partners/"

  const partnerFiles = [
    "google-cloud-copy.png",
    "gsa-contract-holder-copy.png",
    "oracle-gold-partner.png",
    "people-soft.png",
    "sap-copy.png",
    "workday-services-partner-copy.png",
  ]

  const [position, setPosition] = useState(0)

  const targetLeft = 2000;
  const speed = .25; // Pixels per frame

  function step() {
    // console.log(position)
    setPosition(position + speed)
    requestAnimationFrame(step)
  }

  // function step(id, startPoint, ) {
  //   if (currentLeft < targetLeft) {
  //     currentLeft += speed;

  //     // image1.style.left = currentLeft + "px"; 
  //     // image2.style.left = currentLeft + "px"; 
  //     // image3.style.left = currentLeft + "px"; 
  //     // image4.style.left = currentLeft + "px"; 
  //     // image5.style.left = currentLeft + "px"; 
  //     // image6.style.left = currentLeft + "px"; 

  //     requestAnimationFrame(step); // Keep looping
  //   } else {

  //   }
  // }

  // // Start animation
  // requestAnimationFrame(step);

  return (
    <div className="my-12" >
      <button className="p-4 mx-12 rounded-md bg-slate-400" onClick={() => reset()}>Reset</button>
      <hr/>
      <div className="my-12 h-32">
        <p className="text-xl">{position + 200}</p>
        <img src={proxy + partnerFiles[0]} id="img1" className={`partnership-image absolute w-[30vw] left-[${position + 200}px]`} />
        {/* <img src={proxy + partnerFiles[1]} id="img2" className="partnership-image absolute w-[30vw]" style={{left: `${0}px`}} />
        <img src={proxy + partnerFiles[2]} id="img3" className="partnership-image absolute w-[30vw]" style={{left: `${0}px`}} />
        <img src={proxy + partnerFiles[3]} id="img4" className="partnership-image absolute w-[30vw]" style={{left: `${0}px`}} />
        <img src={proxy + partnerFiles[4]} id="img5" className="partnership-image absolute w-[30vw]" style={{left: `${0}px`}} />
        <img src={proxy + partnerFiles[5]} id="img6" className="partnership-image absolute w-[30vw]" style={{left: `${0}px`}} /> */}
      </div>
    </div>
  )
}