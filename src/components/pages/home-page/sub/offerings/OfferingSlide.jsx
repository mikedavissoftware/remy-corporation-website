import { SwiperSlide } from 'swiper/react';


export default function OfferingSlide({ offering }) {



  return (
    <div style={{backgroundImage: `url(images/offerings/${offering.id}.jpg)`}} className={`offering-container hero h-[90vh] bg-opacity-55 bg-center`}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-5">
          <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-medium2 animate slide-left delay-1">{offering.main}</h1>
          <p className="drop-shadow-dark2 font-semibold text-md sm:text-lg animate fade delay-4">
            {offering.sub}
          </p>
          <button className="btn btn-primary text-xl" onClick={()=>document.getElementById('contact-form-modal').showModal()}>{offering.button}</button>
        </div>
      </div>
    </div>
  )
}