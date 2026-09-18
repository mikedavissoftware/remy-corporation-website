
export default function LetsTalkWorkday() {



  return (
    <div style={{backgroundImage: `url(images/workday-page/needs-it.png)`}} className="hero h-[80vh] md:h-[70vh] bg-opacity-55 bg-center">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-3 md:space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2">Workday Needs IT.</h1>
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2">Remy Delivers it.</h1>
          <p className="drop-shadow-dark2 text-lg md:text-xl">
          Remy adapts to your priorities, internal resources, project scope, ​and timeline.
          </p>
          {/* <button className="btn btn-primary text-xl animate glow dur-3 delay-9" onClick={()=>document.getElementById('contact-form-modal').showModal()}></button> */}
        </div>
      </div>
    </div>
  )
}