

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
    <div className="relative overflow-hidden">
      <div className="h-[50vh] overflow-hidden z-0 hidden md:block ">
        <div className="overflow-hidden">
          <img src="images/events/llouvre.png" className="absolute z-[-1] bg-center bg-cover -top-72"/>
          <div className="absolute w-full h-full bg-darkblue/70"/>
        </div>
      </div>

      <div className="h-[43vh] overflow-hidden z-0 md:hidden">
        <div className="overflow-hidden">
          <img src="images/events/llouvre.png" className="absolute scale-[170%] top-16 object-bottom"/>
          <div className="absolute w-full h-full bg-darkblue/70"/>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 h-full w-full z-1">
        <div className="text-white px-6 py-12 md:px-32 md:py-24 text-center h-full">
          <div className="mx-auto max-w-lg xl:max-w-3xl space-y-6 md:space-y-8 flex-wrap place-content-around h-full">
            <h1 className="text-4xl md:text-6xl leading-10 md:tracking-wide font-bold drop-shadow-medium2 text-white/10 bg-[url(/images/services-page/text-gradient.jpg)] bg-cover bg-bottom bg-clip-text ">Where Ideas and Opportunity Connect</h1>
            <p className="drop-shadow-dark2 text-md md:text-xl leading-5">
              Find Remy at leading industry events as we share insight, build relationships, and explore what's next.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}