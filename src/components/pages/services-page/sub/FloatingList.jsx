



export default function FloatingList() {



  return (
    <div className="absolute left-[5%] w-[90%] md:left-[10%] md:w-[80%] h-40 lg:h-20 -mt-20 lg:-mt-10 mx-auto rounded-lg grid grid-cols-2 md:grid-cols-3 lg:flex lg:place-content-evenly lg:items-center gap-y-4 md:gap-y-6 place-content-center text-center text-md md:text-lg text-wdbluepastel bg-slate-200 drop-shadow-light3" >
      <div className="col-span-1">Direct Hire</div>
      <div className="col-span-1">Contract</div>
      <div className="col-span-1">Contract-to-Hire</div>
      <div className="col-span-1">Payrolling</div>
      <div className="col-span-1">Executive Search</div>
      <div className="col-span-1">Global Reach</div>
    </div>
  )
}