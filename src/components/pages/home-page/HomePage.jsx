

import HomeHero from "./sub/HomeHero"
import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/offerings/Offerings"
import FocusAreas from "./sub/focus-areas/FocusAreas"
import Partnerships from "./sub/partnerships/Partnerships"

import LogoBorder from "../../LogoBorder"

export default function HomePage() {


  return (
    <div id="home-page" className="overflow-hidden" >   
      {/* <HomeHero /> */}

      <div id="services" className="h-[4rem] mt-[-4rem]"></div>
      <Offerings />

      <div id="about" className="h-[4rem] mt-[-4rem]"></div>
      <AboutUs />

      <div id="focus-areas" className="h-[4rem] mt-[-4rem]"><LogoBorder /></div>
      <FocusAreas />

      <div id="partnerships" className="h-[4rem] mt-[-4rem]"></div>
      <Partnerships />
    </div>
  )
}