import FocusAreasCarousel from "./FocusAreasCarousel"


export default function FocusAreas() {



  return (
    <div className="px-16 py-16 sm:pl-16 bg-white bg-opacity-65" >
      <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-wide">Our Focus Areas</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto my-8 w-[6%] md:w-[3%]"/>

      <FocusAreasCarousel />

      <div className="grid grid-cols-1 gap-y-8 gap-x-8 text-center max-w-3xl sm:grid-cols-2 md:grid-cols-3 md:gap-y-6 md:mx-auto lg:grid-cols-3">
        
      </div>
    </div>
  )
}