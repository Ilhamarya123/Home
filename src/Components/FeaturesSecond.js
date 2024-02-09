import React from 'react';


//import data
  import {features} from '../data';


const FeaturesSecond = () => {
// destructive features
 const {title,subtitle,image}=features.feature2;

 return <section className='section'>
  <div className='container mx-auto'>
   <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
  {/* text  */}
  <div className='flex-1 flex flex-col justify-end mb-[130px]'>
    <h2 className='title font-bold text-4xl mb-[25px] '>{title}</h2>
    <p className='subtitle'>{subtitle}</p>
  </div>
  
  {/*  image */}
  <div className='flex-1 mt-[10rem] '>
    <img src={image.type} alt='' />
  </div>
  
   </div>
  </div>
 </section>
  
};

export default FeaturesSecond;
