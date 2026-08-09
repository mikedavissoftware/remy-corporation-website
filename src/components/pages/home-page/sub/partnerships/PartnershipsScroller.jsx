import { useState } from "react"

import PartnershipImage from "./PartnershipImage"

import { partnerships } from "../../../../../../db/partnerships"
import "./AutoScrollingPartnerships.css"

export default function PartnershipsScroller() {

  const proxy = "images/general/partners/"
  const partnershipsDoubled = [...partnerships, ...partnerships]

  const partnerShipImageComponents = partnershipsDoubled.map((partnership) => {
    return <img src={`${proxy}${partnership.fileName}`} className="scroll-image" />
  })

  return (
    <div className="scroll-container my-12 h-96" >
      <div className="scroll-track my-12 h-32">
        {partnerShipImageComponents}
      </div>
    </div>
  )
}