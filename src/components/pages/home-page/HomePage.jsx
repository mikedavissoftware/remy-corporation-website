

import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/offerings/Offerings"
import Industries from "./sub/industries/Industries"
import Partnerships from "./sub/partnerships/Partnerships"

import LogoBorder from "../../LogoBorder"

export default function HomePage() {


  return (
    <div id="home-page" className="overflow-hidden" >   
      <div id="services" className="h-[7vh] mt-[-7vh]"></div>
      <Offerings />

      <div id="about" className="h-[7vh] mt-[-7vh]"></div>
      <AboutUs />

      <div id="industries" className="h-[7vh] mt-[-7vh]"></div>
      <Industries />

      <div id="partnerships" className="h-[7vh] mt-[-7vh]"><LogoBorder /></div>
      <Partnerships />
    </div>
  )
}