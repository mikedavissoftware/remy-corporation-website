import { useState } from "react"

import PartnershipImage from "./PartnershipImage"

import { partnerships } from "../../../../../../db/partnerships"

export default function PartnershipsScroller() {

  const [position, setPosition] = useState(0)

  const partnerShipImageComponents = partnerships.map((partnership) => {
    return <PartnershipImage key={partnership.id} imageObject={partnership} />
  })

  return (
    <div className="my-12 h-96" >
      <div className="my-12 h-32">
        {partnerShipImageComponents}
      </div>
    </div>
  )
}