
import { Carousel } from "@material-tailwind/react";

import HomeHero from "../sub/HomeHero"


export default function Offerings() {

  

  return (
    // <Carousel className="rounded-xl relative" autoplay="true" autoplayDelay="5000" loop="true" transition={{duration: 1.5}}>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //   <iframe className="h-screen w-screen" src="https://www.youtube.com/embed/wskShGwowio?si=GI60oqm6PxvYRQfP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    // </Carousel>
    <Carousel className="rounded-xl relative" autoplay="true" autoplayDelay="5000" loop="true" transition={{duration: 1}}>
      <div className="h-fit bg-[url(/images/home/home-hero.jpg)] bg-opacity-55 bg-center">
        <div className="bg-opacity-40"></div>
        <div className="text-white py-24">
          <div className="my-auto mx-4 max-w-4xl space-y-5">
            <h1 className="text-6xl font-bold drop-shadow-medium2 animate slide-left delay-1">Unlock Your Full <br/>Workday Potential</h1>
            <p className="drop-shadow-dark2 font-semibold text-2xl animate fade delay-4">
              As Workday's Services Partner, we're committed to enhancing your Workday experience.
            </p>
            <button className="btn btn-primary text-xl">Get Started</button>
          </div>
        </div>
      </div>
      <div className="h-fit bg-[url(/images/home/home-hero.jpg)] bg-opacity-55 bg-center">
        <div className="bg-opacity-40"></div>
        <div className="text-white py-24">
          <div className="my-auto mx-4 max-w-4xl space-y-5">
            <h1 className="text-6xl font-bold drop-shadow-medium2 animate slide-left delay-1">Unlock Your Full <br/>Workday Potential</h1>
            <p className="drop-shadow-dark2 font-semibold text-2xl animate fade delay-4">
              As Workday's Services Partner, we're committed to enhancing your Workday experience.
            </p>
            <button className="btn btn-primary text-xl">Get Started</button>
          </div>
        </div>
      </div>
      <div className="h-fit bg-[url(/images/home/home-hero.jpg)] bg-opacity-55 bg-center">
        <div className="bg-opacity-40"></div>
        <div className="text-white py-24">
          <div className="my-auto mx-4 max-w-4xl space-y-5">
            <h1 className="text-6xl font-bold drop-shadow-medium2 animate slide-left delay-1">Unlock Your Full <br/>Workday Potential</h1>
            <p className="drop-shadow-dark2 font-semibold text-2xl animate fade delay-4">
              As Workday's Services Partner, we're committed to enhancing your Workday experience.
            </p>
            <button className="btn btn-primary text-xl">Get Started</button>
          </div>
        </div>
      </div>
      {/* <HomeHero /> */}
    </Carousel>
  )
}