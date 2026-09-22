
export default function LetsTalkWorkday() {



  return (
    <div className="relative">

      <div className="h-[80vh] overflow-hidden z-0">
        <div className="relative overflow-hidden h-full">
          <img src="images/workday-page/lets-talk-workday-reduced.jpg" className="absolute z-[-1] object-top object-cover w-full h-full"/>
          {/* <div className="absolute w-full h-full bg-gradient-to-r from-darkblue via-darkblue/50 via-80% to-wdblue/75"/> */}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 h-full w-full z-1">
        <div>
          <div className="text-white px-6 py-24 md:px-32 md:py-48">
            <div className="my-auto mx-4 max-w-lg xl:max-w-3xl space-y-3 md:space-y-6">
              <h1 className="text-4xl md:text-8xl font-bold drop-shadow-medium2 text-white">Let's Talk Workday!</h1>
              <p className="drop-shadow-dark2 text-xl md:text-2xl font-semibold">
                What are your Workday needs?
              </p>
              <p className="drop-shadow-dark2 text-lg md:text-xl">
                Remy will connect you with the right expertise, support, and delivery approach to move things forward.
              </p>
              {/* <div className="text-xl text-white font-bold w-fit h-fit px-3 py-3 !mt-8 rounded-md border-2 border-wdorange">Customized Solutions</div> */}
              
            </div>
            <div className="flex flex-wrap gap-y-6 justify-around mt-12">
              <button className="btn btn-secondary text-xl !text-black" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Individual Workday Specialist</button>
              <button className="btn btn-secondary text-xl !text-black" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Dedicated Project Team</button>
              <button className="btn btn-secondary text-xl !text-black" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Ongoing Flexible Support</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}