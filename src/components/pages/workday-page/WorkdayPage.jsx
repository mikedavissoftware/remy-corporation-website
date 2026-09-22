
import MoveWorkdayForward from "./sub/MoveWorkdayForward"
import PartnershipOverview from "./sub/PartnershipOverview"
import NeedsIT from "./sub/NeedsIT"
import ServicesAndCapabilities from "./sub/ServicesAndCapabilities"
import LetsTalkWorkday from "./sub/LetsTalkWorkday"

import NavAnchor from "../../global/NavAnchor"

export default function WorkdayPage() {



  return (
    <div className="overflow-hidden" >
      <NavAnchor height={10} id={"top"}/>

      <MoveWorkdayForward />
      <PartnershipOverview />
      <NeedsIT />
      <ServicesAndCapabilities />
      <LetsTalkWorkday />
    </div>
  )
}