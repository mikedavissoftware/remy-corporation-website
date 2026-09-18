

import FastForwardIcon from '@mui/icons-material/FastForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ArrowComponents({ numArrows }) {
  const array = Array.from({ length: numArrows }, (_, index) => {
    return <ArrowForwardIosIcon key={index} />
  })
  return array
}

export default function MoveBizForward() {

  return (
    <div className="relative">
      <div className="h-[50vh] overflow-hidden hidden md:grid grid-cols-5 z-0">
        <div className="col-span-2 bg-darkblue"></div>
        <div className="relative col-span-3 overflow-hidden">
          <img src="images/services-page/mbf-banner.jpeg" className="absolute z-[-1] object-cover bottom-0 origin-bottom h-[100vh]"/>
          <div className="absolute w-full h-full bg-gradient-to-r from-darkblue via-darkblue/50 via-80% to-wdblue/75"/>
        </div>
      </div>

      <div className="md:hidden h-[80vh] md:h-[50vh] overflow-hidden z-0">
        <div className="bg-darkblue h-[30%] w-full"></div>
        <div className="relative overflow-hidden h-[70%]">
          <img src="images/services-page/mbf-banner.jpeg" className="absolute z-[-1] object-cover bottom-0 origin-bottom h-[60vh]"/>
          <div className="absolute w-full h-full bg-gradient-to-b from-darkblue via-darkblue/30 via-80% to-wdblue/75"/>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 h-full w-full z-1">
        <div>
          <div className="text-white px-6 py-12 md:px-32 md:py-24">
            <div className="my-auto mx-4 max-w-lg xl:max-w-3xl space-y-3 md:space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 text-white/10 bg-[url(/images/services-page/text-gradient.jpg)] bg-cover bg-bottom bg-clip-text ">Let's Move Your Business Forward</h1>
              <div className="gap-x-4 md:scale-125 origin-left text-wdorange flex">
                <ArrowComponents numArrows={40} />
              </div>
              <p className="drop-shadow-dark2 text-lg md:text-xl">
                Whatever your business needs, Remy provides the expertise and support to move it forward.
              </p>
              <button className="btn btn-secondary text-xl !text-darkblue hover:!text-white !mt-6" onClick={()=>document.getElementById('contact-form-modal').showModal()}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}