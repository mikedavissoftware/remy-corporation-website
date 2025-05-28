

import HomeHero from "./sub/HomeHero"
import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/Offerings"
import FocusAreas from "./sub/FocusAreas"
import Partnerships from "./sub/Partnerships"
import Carousel from "./sub/Carousel"

export default function HomePage() {


  return (
    <div className="" >   
      <HomeHero />

      <div id="about" className="h-[4rem] mt-[-4rem]"></div>
      <AboutUs />

      <div id="carousel" className="h-[4rem] mt-[-4rem]"></div>
      <div className="width-screen">
        <Carousel />
      </div>
      
      <div id="offerings" className="h-[4rem] mt-[-4rem]"></div>
      <Offerings />

      <div id="focus-areas" className="h-[4rem] mt-[-4rem]"></div>
      <FocusAreas />

      <div id="partnerships" className="h-[4rem] mt-[-4rem]"></div>
      <Partnerships />
    </div>
  )
}