

import FastForwardIcon from '@mui/icons-material/FastForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ArrowComponents({ numArrows }) {
  const array = Array.from({ length: numArrows }, (_, index) => {
    return <ArrowForwardIosIcon key={index} />
  })
  return array
}

export default function MoveWorkdayForward() {

  return (
    <div className="relative">

      <div className="h-[93vh] overflow-hidden hidden md:grid grid-cols-5 z-0">
        <div className="col-span-2 bg-darkblue"></div>
        <div className="relative col-span-3 overflow-hidden">
          <img src="images/workday-page/workday-page-banner.png" className="absolute z-[-1] object-cover bottom-0 origin-bottom h-[100vh]"/>
          <div className="absolute w-full h-full bg-gradient-to-r from-darkblue via-darkblue/50 via-80% to-wdblue/75"/>
        </div>
      </div>
      
      <div className="md:hidden h-[93vh] md:h-[50vh] overflow-hidden z-0">
        <div className="bg-darkblue h-[30%] w-full"></div>
        <div className="relative overflow-hidden h-[70%]">
          <img src="images/workday-page/workday-page-banner.png" className="absolute z-[-1] object-cover bottom-0 right-0 h-full"/>
          <div className="absolute w-full h-full bg-gradient-to-b from-darkblue via-darkblue/30 via-80% to-wdblue/75"/>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 h-full w-full z-1">
        <div>
          <div className="text-white px-6 py-24 md:px-32 md:py-48">
            <div className="my-auto mx-4 max-w-lg xl:max-w-3xl space-y-3 md:space-y-6">
              <div className="flex h-24 md:h-32 mb-8 gap-8">
                <img src="images/workday-page/services-partner.png" className="transition-all duration-300 drop-shadow-glow2 hover:drop-shadow-glow4"></img>
                <img src="images/workday-page/partner-since-2019.png" className="transition-all duration-300 drop-shadow-glow2 hover:drop-shadow-glow4"></img>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-medium2 text-white/10 bg-[url(/images/services-page/text-gradient.jpg)] bg-cover bg-bottom bg-clip-text ">Move Your Workday Forward.</h1>
              <p className="drop-shadow-dark2 text-lg md:text-xl">
                Strategic consulting, specialized expertise, ​and flexible support for  every stage of your ​Workday journey.​
              </p>
              <div className="text-xl text-white font-bold w-fit h-fit px-3 py-3 !mt-8 rounded-md border-2 border-wdorange">Customized Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}