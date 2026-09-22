
import MoveWorkdayForward from "./sub/MoveWorkdayForward"
import PartnershipOverview from "./sub/PartnershipOverview"
import NeedsIT from "./sub/NeedsIT"
import ServicesAndCapabilities from "./sub/ServicesAndCapabilities"
import LetsTalkWorkday from "./sub/LetsTalkWorkday"

export default function WorkdayPage() {

  return (
    <div className="overflow-hidden" >
      <MoveWorkdayForward />
      <PartnershipOverview />
      <NeedsIT />
      <ServicesAndCapabilities />
      <LetsTalkWorkday />
    </div>
  )
}