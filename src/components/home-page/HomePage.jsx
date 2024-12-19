

import HomeHero from "./HomeHero"

export default function HomePage() {



  return (
    <div className="" >   
      <HomeHero />

      <div id="about" className="h-24"></div>
      <div className="h-96 border-4 border-black"><p>About Us</p></div>

      <div id="focus" className="h-24"></div>
      <div className="h-96 border-4 border-black"><p>Focus</p></div>

      <div id="partnerships" className="h-24"></div>
      <div className="h-96 border-4 border-black"><p>Partnerships</p></div>
    </div>
  )
}