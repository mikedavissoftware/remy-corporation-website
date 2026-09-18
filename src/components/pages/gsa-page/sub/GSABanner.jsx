
export default function GSABanner() {



  return (
    <div style={{backgroundImage: `url(images/gsa-page/gsa-banner-image.png)`}} className="hero h-[80vh] md:h-[70vh] bg-opacity-55 bg-center">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-6 md:space-y-5">
          <h2 className="text-lg md:text-2xl mb-4 animate fade delay-7"><span className="font-bold uppercase text-2xl md:text-auto">Remy Corporation | </span><br className="md:hidden"/><span className="italic">GSA Multiple Award Schedule Contractor​</span></h2>

          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 animate fade slide-left">A Direct Route to Proven IT Expertise</h1>

          <p className="drop-shadow-dark2 text-lg md:text-xl animate fade slide-left delay-3">
            Federal agencies can now access Remy’s Workday and technology consulting services through the GSA Multiple Award Schedule.
          </p>

          <button className="btn bg-gsa text-xl !mt-12 md:!mt-8 !text-black animate glow dur-3 delay-6" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Remy's GSA eLibrary</button>
        </div>
      </div>
    </div>
  )
}