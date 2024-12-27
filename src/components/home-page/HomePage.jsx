

import HomeHero from "./sub/HomeHero"
import AboutUs from "./sub/AboutUs"
import Offerings from "./sub/Offerings"

export default function HomePage() {


  return (
    <div className="" >   
      <HomeHero />

      <div id="about" className="h-[6rem] mt-[-6rem]"></div>
      <AboutUs />
      
      <div id="offerings" className="h-[6rem] mt-[-6rem]"></div>
      <Offerings />

      <div id="focus" className="h-[6rem] mt-[-6rem]"></div>
      <div className="h-96 border-4 border-black"><p>Focus</p></div>

      <div id="partnerships" className="h-[6rem] mt-[-6rem]"></div>
      <div className="h-96 border-4 border-black"><p>Partnerships</p></div>
    </div>
  )
}