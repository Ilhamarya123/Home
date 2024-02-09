import React from 'react';


//import swiper react components
import {Swiper,SwiperSlide} from 'swiper/react'


//import swiper styles
import 'swiper/css';


//import requiretment modules


//impor data
import {testimonial} from '../data';

const TestimonialSlider = () => {
return(
  <Swiper className='testimonialSlider' navigation={true}
  autoplay={true}
  >
    {testimonial.persons.map((person, index) => {
      //destructive  person 
      const {avatar,name,occupation,message} = person;
      return <SwiperSlide key={index}>
        <div className='flex flex-col min-h-[250px]'>
          <div className='flex items-center gap-x-5 mb-9 mt-5'>
            {/* avatar */}
            <img src={avatar.type} alt='' />
            
            <div>
              <div className='text-xl font-semi-bold'>{name}</div>
              <div className='text-gray-500'>{occupation}</div>
            </div>
            </div>
            {/* text */}
            <div className=''>{message}</div>
        </div>
        </SwiperSlide>
    })}
  </Swiper>
);
};

export default TestimonialSlider;
