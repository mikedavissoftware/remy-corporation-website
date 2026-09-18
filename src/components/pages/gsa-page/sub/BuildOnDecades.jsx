
export default function BuildOnDecades() {



  return (
    <div style={{backgroundImage: `url(images/gsa-page/build-on-decades.png)`}} className="hero h-[80vh] md:h-[70vh] bg-opacity-55 bg-center">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-3 md:space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2">Build on Decades of Public Sector Experience</h1>
          <p className="drop-shadow-dark2 text-md md:text-xl">
            Available to all eligible Federal, State, Local, Tribal, and Territorial Government Buyers. ​
          </p>
          <button className="btn bg-gsa text-xl !text-black" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Learn More</button>
        </div>
      </div>
    </div>
  )
}