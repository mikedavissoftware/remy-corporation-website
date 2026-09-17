
export default function ServicesBanner() {



  return (
    <div style={{backgroundImage: `url(images/services-page/services-page-banner.png)`}} className="hero h-[80vh] md:h-[70vh] bg-opacity-55 bg-center">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-3 md:space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 animate fade slide-left">The Right People.</h1>
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 animate fade slide-left delay-3">The Right Expertise.</h1>
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 animate fade slide-left delay-5">One Partnership.</h1>
          <p className="drop-shadow-dark2 text-lg md:text-xl animate fade delay-8">
            From individual hires to complex technology initiatives, Remy provides the people, expertise, and support organizations needed to move forward
          </p>
          {/* <button className="btn btn-primary text-xl animate glow dur-3 delay-9" onClick={()=>document.getElementById('contact-form-modal').showModal()}></button> */}
        </div>
      </div>
    </div>
  )
}