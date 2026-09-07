import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import OfferingSlide from './OfferingSlide';
import { offerings } from "../../../../../../db/offerings"

import './Offerings.css'

export default function Offerings() {

  return (
    <Swiper
      // 1. Pass the modules needed for your features
      modules={[Navigation, Pagination, Autoplay]}
      
      // 2. Map your exact configuration settings as props
      slidesPerGroupAuto={true}
      speed={800}
      normalizeSlideIndex={false}
      roundLengths={true}
      loop={true}
      loopAddBlankSlides={true}
      
      // 3. Let React handle the elements natively with booleans
      navigation={true}
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 8000 }}
      
      // 4. Fallback observers to prevent layout issues
      observer={true}
      observeParents={true}
      slidesPerView={1}

      className="drop-shadow-[0px_0px_5px_rgba(0,0,0,.3)]"
    >
      {offerings.map((offering) => {
        return (
          <SwiperSlide key={offering.id}>
            {({ isActive }) => { // isActive is passed down as workaround to allow CSS animations of heading, paragraph, and button
              return <OfferingSlide offering={offering} isActive={isActive} />
            }}
          </SwiperSlide>
        )
      })}
      <div className="mouse-scroll-cont justify-center visible md:hidden">
        <div className="mouse rotate-90"></div>
      </div>
    </Swiper>
  )
}