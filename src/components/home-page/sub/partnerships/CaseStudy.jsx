
import { useState, useEffect, useRef } from "react"

export default function CaseStudy({ fileName, text }) {



  return (
    <div className="grid grid-cols-1 gap-8 items-center max-w-6xl sm:grid-cols-2 md:mx-auto lg:grid-cols-3 h-96">
      <div className="col-span-1">
        <img src={`images/general/partners/${fileName}`} className="drop-shadow-lg" />
      </div>
      <div className="col-span-2">
        <p>{text}</p>
      </div>
    </div>
  )
}