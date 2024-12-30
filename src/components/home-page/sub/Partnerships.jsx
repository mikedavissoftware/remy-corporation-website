



export default function Partnerships() {



  return (
    <div className="p-16 bg-[radial-gradient(#ffffff,#DCDECD)]" >
      <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-wide">Our Partnerships</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm mx-auto mt-8 w-[3%]"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 items-center max-w-3xl mx-auto">
        <div>
          <img src="images/general/partners/workday-services-partner.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/google-cloud.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/gsa-contract-holder.png" className="w-full drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/oracle-gold-partner.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/people-soft.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/sap.png" className="h-24 mx-auto drop-shadow-lg" />
        </div>
      </div>
    </div>
  )
}