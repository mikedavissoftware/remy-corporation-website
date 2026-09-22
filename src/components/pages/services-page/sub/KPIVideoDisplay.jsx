

import "./KPIVideoDisplay.css"

export default function KPIVideoDisplay() {



  return (
    <div className="video-section relative w-auto md:h-[70vh] overflow-hidden" >
      <video autoPlay muted loop playsInline id="globe-video" className="section-video saturate-60 brightness-80 contrast-50">
        <source src="images/services-page/globe-video.mp4" type="video/mp4" />
        <img src="/images/services-page/globe-video-fallback-reduced.jpg" />
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-wdbluepastel/70 z-0 mix-blend-hard-light"/>

      <div className="relative z-2 h-full max-w-7xl mx-auto">
        <div className="h-[80%] px-12 md:px-24 lg:px-36 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:place-items-center md:place-content-around drop-shadow-light2">
          <div className="col-span-1">
            <h2 className="text-white text-7xl font-bold">15</h2>
            <h3 className="text-white text-2xl">Office Locations</h3>
          </div>
          <div className="col-span-1">
            <h2 className="text-white text-7xl font-bold">27+</h2>
            <h3 className="text-white text-2xl">Years of IT Expertise</h3>
          </div>
          <div className="col-span-1">
            <h2 className="text-white text-7xl font-bold">100+</h2>
            <h3 className="text-white text-2xl">Fortune 500 Clients</h3>
          </div>
          <div className="col-span-1">
            <h2 className="text-white text-7xl font-bold">98%</h2>
            <h3 className="text-white text-2xl">Client Satisfaction</h3>
          </div>
        </div>

        <div className="flex flex-wrap h-[20%] items-center px-12 md:px-24 pb-16 gap-x-8 gap-y-4 drop-shadow-medium1">
          <div className="text-xl text-slate-300 uppercase tracking-wide font-bold">Global Coverage</div>
          <div className="text-xl text-slate-300 px-3 py-1 rounded-md border-2 border-slate-300"><span className="font-extrabold text-wdorange">• </span>North America</div>
          <div className="text-xl text-slate-300 px-3 py-1 rounded-md border-2 border-slate-300"><span className="font-extrabold text-wdorange">• </span>EMEA</div>
          <div className="text-xl text-slate-300 px-3 py-1 rounded-md border-2 border-slate-300"><span className="font-extrabold text-wdorange">• </span>APJ</div>

        </div>
      </div>
      
    </div>
  )
}