



export default function Partnerships() {



  return (
    <div className="p-8 bg-[radial-gradient(#ffffff,#DCDECD)] md:p-16" >
      <h1 className="text-4xl font-semibold tracking-wide sm:text-center md:text-5xl">Partnerships</h1>

      <hr className="border border-[1.5px] border-wdblue rounded-sm my-8 w-[10%] sm:mx-auto md:w-[3%]"/>

      <div className="grid grid-cols-1 gap-y-8 gap-x-8 items-center max-w-3xl sm:grid-cols-2 md:gap-y-6 md:mx-auto lg:grid-cols-3">
        <div>
          <img src="images/general/partners/workday-services-partner-copy.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/google-cloud-copy.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/gsa-contract-holder-copy.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/oracle-gold-partner.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/people-soft.png" className="drop-shadow-lg" />
        </div>
        <div>
          <img src="images/general/partners/sap-copy.png" className="h-24 mx-auto drop-shadow-lg" />
        </div>
      </div>
    </div>
  )
}