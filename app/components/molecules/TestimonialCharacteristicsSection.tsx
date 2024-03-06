import React from 'react';
import { TestimonialCharacteristics } from '@/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

interface TestimonialCharacteristicsProps {
  characteristics: TestimonialCharacteristics[];
}

const swiperOptions: SwiperOptions = {
  speed: 400,
  slidesPerView: 2.3,
  spaceBetween: 6,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  },
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
};

export const TestimonialCharacteristicsSection: React.FC<TestimonialCharacteristicsProps> = ({ characteristics }) => {
  return (
    <div className='testabout-prin-characteristics'>
      <Swiper {...swiperOptions} >
        {characteristics.map(({ title, number }, index) => (
          <SwiperSlide key={index}>
            <div className='testabout-prin-characteristics-item'>
              <h3>{number}</h3>
              <p>{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};