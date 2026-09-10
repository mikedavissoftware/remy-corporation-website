

import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/offerings/Offerings"
import Industries from "./sub/industries/Industries"
import Partnerships from "./sub/partnerships/Partnerships"

import NavAnchor from "../../global/NavAnchor"
import LogoBorder from "../../global/dividers/LogoDivider"
import BubbleDownDivider from "../../global/dividers/BubbleDownDivider"
import BubbleDownDividerInverted from "../../global/dividers/BubbleDownDividerInverted"

export default function HomePage() {


  return (
    <div id="home-page" className="overflow-hidden" >   
      <NavAnchor id={"services"} />
      <Offerings />

      <NavAnchor id={"about"} />
      <AboutUs />

      

      <NavAnchor id={"industries"} />
      <BubbleDownDivider xScale={2} yScale={.5} xOffset={-50} fillColor={"#f2f2ed"}/>
      <Industries />

      <BubbleDownDividerInverted xScale={2} yScale={.5} xOffset={-50} fillColor={"#f2f2ed"}/>

      {/* <div id="partnerships" className="h-[7vh] mt-[-7vh]"><LogoDivider /></div> */}
      <NavAnchor id={"partnerships"} />
      <Partnerships />
    </div>
  )
}