import React from 'react';


 // import components
 import TestimonialSlider from './TestimonialSlider';

//import data
import {testimonial} from '../data';

const Testimonial = () => {

  // destructive testimonial
  const {image, title} = testimonial;

  return <section className='section'>
    <div className='container mx-auto'>
     <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
      <div className='lg:max-w-[50%] mt-[5rem] mb-9'>
        {/*title */}
         <h2 className='title text-4xl font-bold  mt-[2rem]'>{title}</h2>
         {/* slider  */}
         <TestimonialSlider/>
      </div>
      {/* image */}
      <div className='order-1 mt-[5rem]'>
        <img src={image.type} alt='' />
      </div>
     </div>
    </div>
    </section>;
};

export default Testimonial;
