import { useState, useEffect, useRef } from "react"

import PartnershipsScroller from "./PartnershipsScroller"

import PlayVector from "../../../../../assets/svg/play-svgrepo-com.svg"
import PauseVector from "../../../../../assets/svg/pause-svgrepo-com.svg"
import NextPrevVector from "../../../../../assets/svg/fast-forward-svgrepo-com.svg"


export default function Partnerships() {



  return (
    <div className="bg-[radial-gradient(#ffffff,#DCDECD)] py-6" >
      <h1 className="px-8 pt-16 text-center text-4xl sm:text-5xl font-semibold tracking-wide">Partnerships</h1>
      {/* <h1 className="text-center text-5xl font-semibold tracking-wide">{timerID.current}</h1> */}

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto mt-8 w-[6%] md:w-[3%]"/>

      <PartnershipsScroller />

    </div>
  )
}