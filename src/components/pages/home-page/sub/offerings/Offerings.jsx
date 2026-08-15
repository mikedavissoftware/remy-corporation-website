import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import OfferingSlide from './OfferingSlide';
import { offerings } from "../../../../../../db/offerings"

export default function Offerings() {

  return (
    <Swiper
      // 1. Pass the modules needed for your features
      modules={[Navigation, Pagination, Autoplay]}
      
      // 2. Map your exact configuration settings as props
      speed={800}
      normalizeSlideIndex={false}
      roundLengths={true}
      loop={true}
      loopAddBlankSlides={false}
      
      // 3. Let React handle the elements natively with booleans
      navigation={true}
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 8000 }}
      
      // 4. Fallback observers to prevent layout issues
      observer={true}
      observeParents={true}
      slidesPerView={1}
    >
      {offerings.map((offering) => {
        return (
          <SwiperSlide>
            <OfferingSlide key={offering.id} offering={offering} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}