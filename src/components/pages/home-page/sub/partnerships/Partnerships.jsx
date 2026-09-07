import { useState, useEffect, useRef } from "react"

import { partnerships } from "../../../../../../db/partnerships"
import PartnershipsScroller from "./PartnershipsScroller"
import PartnershipsScrollerMobile from "./PartnershipsScrollerMobile"

import PlayVector from "../../../../../assets/svg/play-svgrepo-com.svg"
import PauseVector from "../../../../../assets/svg/pause-svgrepo-com.svg"
import NextPrevVector from "../../../../../assets/svg/fast-forward-svgrepo-com.svg"


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

  return (
    <div className="bg-[#f2f2ed] py-12" >
      {/* <h1 className="px-8 pt-8 md:[pt-16] text-center text-4xl md:text-5xl font-semibold tracking-wide">Partnerships</h1> */}
      {/* <h1 className="text-center text-5xl font-semibold tracking-wide">{timerID.current}</h1> */}

      {/* <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto mt-8 w-[6%] md:w-[3%]"/> */}

      <PartnershipsScroller partnerships={partnershipsShuffled} />
      <PartnershipsScrollerMobile partnerships={partnershipsShuffled} />

    </div>
  )
}