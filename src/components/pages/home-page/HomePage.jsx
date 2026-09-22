

import AboutUs from "./sub/about/AboutUs"
import Offerings from "./sub/offerings/Offerings"
import Industries from "./sub/industries/Industries"
import Partnerships from "./sub/partnerships/Partnerships"

import NavAnchor from "../../global/NavAnchor"
import LogoDivider from "../../global/dividers/LogoDivider"
import LogoDividerMobile from "../../global/dividers/LogoDividerMobile"
import BubbleDownDivider from "../../global/dividers/BubbleDownDivider"
import BubbleDownDividerInverted from "../../global/dividers/BubbleDownDividerInverted"

export default function HomePage() {

  

  return (
    <div id="home-page" className="overflow-hidden" >   
      <NavAnchor height={7} id={"services"} />
      <Offerings />

      <NavAnchor height={7} id={"about"} />
      <AboutUs />

      <NavAnchor height={10} id={"industries"} />
      <BubbleDownDividerInverted yHeight={60} fillColor={"#f2f2ed"} flip={true} />
      <Industries />

      <BubbleDownDividerInverted yHeight={60} fillColor={"#f2f2ed"} flip={false} />

      {/* <div id="partnerships" className="h-[7vh] mt-[-7vh]">
        <LogoDivider />
        <LogoDividerMobile />
      </div> */}
      <NavAnchor height={7} id={"partnerships"} />
      <Partnerships />
    </div>
  )
}