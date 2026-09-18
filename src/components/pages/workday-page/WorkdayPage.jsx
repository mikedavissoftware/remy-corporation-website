
import MoveWorkdayForward from "./sub/MoveWorkdayForward"
import PartnershipOverview from "./sub/PartnershipOverview"
import NeedsIT from "./sub/NeedsIT"

export default function WorkdayPage() {



  return (
    <div className="overflow-hidden" >
      <MoveWorkdayForward />
      <PartnershipOverview />
      <NeedsIT />
    </div>
  )
}