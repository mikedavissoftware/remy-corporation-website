import { useState, useEffect, useRef } from "react"

import { partnerships } from "../../../../../../db/partnerships"
import PartnershipsScroller from "./PartnershipsScroller"
import PartnershipsScrollerMobile from "./PartnershipsScrollerMobile"

import PlayVector from "../../../../../assets/svg/play-svgrepo-com.svg"
import PauseVector from "../../../../../assets/svg/pause-svgrepo-com.svg"
import NextPrevVector from "../../../../../assets/svg/fast-forward-svgrepo-com.svg"

import "./Partnerships.css"


export default function Partnerships() {

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const partnershipsShuffled = shuffle(partnerships)

  const randX = () => {
    return Math.floor(Math.random(-40, 40))
  }

  const partnershipImageComponents = partnershipsShuffled.map((partnership, index) => {
    const fromColor = ""
    const toColor = ""
    return <a className={`scroll-link relative inline-block`} key={index}><img src={`images/partners/${partnership.fileName}`} className="scroll-image h-auto w-36 md:w-48 !grayscale"/>
      <div 
        className={`absolute inset-0 z-10 !mix-blend-lighten bg-gradient-to-r from-wdblue to-wdorange`}
        style={{
          filter: `brightness(${partnership.lighten}%)`,
          maskImage: `url('images/partners/${partnership.fileName}')`,
          WebkitMaskImage: `url('images/partners/${partnership.fileName}')`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
      <div 
        className={`absolute inset-0 z-10 !mix-blend-overlay bg-gradient-to-r from-wdblue to-wdorange`}
        style={{
          filter: `brightness(${partnership.overlay}%)`,
          maskImage: `url('images/partners/${partnership.fileName}')`,
          WebkitMaskImage: `url('images/partners/${partnership.fileName}')`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </a>
  })

  return (
    <div className="bg-[#f2f2ed] pt-4 md:pt-8 pb-8 md:pb-10" >
      {/* <h1 className="px-8 pt-8 md:[pt-16] text-center text-4xl md:text-5xl font-semibold tracking-wide">Partnerships</h1> */}
      {/* <h1 className="text-center text-5xl font-semibold tracking-wide">{timerID.current}</h1> */}

      {/* <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto mt-8 w-[6%] md:w-[3%]"/> */}

      <PartnershipsScroller partnershipImageComponents={partnershipImageComponents} />
      <PartnershipsScrollerMobile partnershipImageComponents={partnershipImageComponents} />

    </div>
  )
}