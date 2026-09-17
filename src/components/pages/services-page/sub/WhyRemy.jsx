import ServiceBadges from "../../home-page/sub/about/ServiceBadges"
import ServicesBanner from "./ServicesBanner";

export default function WhyRemy() {



  return (
    <div className="max-w-8xl mx-auto px-8 md:px-16 pt-28 md:pt-20 grid grid-cols-1 md:grid-cols-8 gap-x-12 items-center text-white">
      <div className="my-auto space-y-3 md:space-y-5 md:col-span-5 text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-medium tracking-wide text-slate-800 uppercase">Why Remy</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-wdbluepastel">Flexible by Design.</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-wdorange">Focused on Fit.</h1>
        <p className="text-lg md:text-xl font-medium text-slate-800">
        Remy combines flexible hiring options, specialized technology expertise, and dedicated support to deliver the right professionals or teams for your goals.​
        </p>
        <div className="pt-4 pb-12">
          <ServiceBadges />
        </div>
      </div>
      <div className="md:col-span-3 mb-12">
        <img src="images/services-page/services-page-animation.gif" className="w-full h-auto rounded-3xl shadow-[inset_0_0_60px_15px_rgba(0,0,0,0.3)]"/>
      </div>
    </div>
  )
}