import { SwiperSlide } from 'swiper/react';


export default function OfferingSlide({ offering, isActive }) {



  return (
    <div style={{backgroundImage: `url(images/offerings/${offering.id}.png)`}} className={`offering-container hero h-[93vh] md:h-[90vh] bg-opacity-55 bg-center`}>
      <div className="hero-overlay bg-black bg-opacity-40"></div>
      <div className="hero-content text-white py-24">
        <div className="my-auto mx-4 max-w-4xl space-y-5">
          <h1 className={`text-5xl md:text-6xl font-bold drop-shadow-medium2 ${isActive ? ('animate fade slide-left delay-1') : 'hidden'}`}>{offering.main}</h1>
          <p className={`drop-shadow-dark2 font-semibold text-md md:text-xl ${isActive ? ('animate fade slide-left delay-3') : 'hidden'}`}>
            {offering.sub}
          </p>
          <button className={`btn btn-primary text-xl ${isActive ? ('animate glow dur-3 delay-5') : 'hidden'}`} onClick={()=>document.getElementById('contact-form-modal').showModal()}>{offering.button}</button>
        </div>
      </div>
    </div>
  )
}