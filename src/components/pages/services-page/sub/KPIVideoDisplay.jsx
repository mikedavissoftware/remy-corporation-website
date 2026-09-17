

import "./KPIVideoDisplay.css"

export default function KPIVideoDisplay() {



  return (
    <div className="video-section relative w-[100vw] h-[70vh] overflow-hidden" >
      <video autoPlay muted loop playsInline id="globe-video" className="section-video">
        <source src="public/images/services-page/globe-video.mp4" type="video/mp4" />
      </video>

      
    </div>
  )
}