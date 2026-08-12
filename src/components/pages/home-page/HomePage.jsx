

import HomeHero from "./sub/HomeHero"
import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/offerings/Offerings"
import FocusAreas from "./sub/focus-areas/FocusAreas"
import PartnershipsTest from "./sub/partnerships/Partnerships"

export default function HomePage() {


  return (
    <div id="home-page" className="" >   
      {/* <HomeHero /> */}

      <div id="services" className="h-[4rem] mt-[-4rem]"></div>
      <Offerings />

      <div id="about" className="h-[4rem] mt-[-4rem]"></div>
      <AboutUs />

      <div id="focus-areas" className="h-[4rem] mt-[-4rem]"></div>
      <FocusAreas />

      <div id="partnerships" className="h-[4rem] mt-[-4rem]"></div>
      <PartnershipsTest />
    </div>
  )
}