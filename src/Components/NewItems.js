import React from 'react';

//import data
import {newInStore} from '../data';

// import components
import NewItemSlider from './NewItemsSlider';



const NewItems = () => {

  //destructive component

  const {title,subtitle,link,icon,} =newInStore;



  return <section className='section '>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
      {/* text */}
      <div className='flex md:flex-col items-baseline gap-x-6  mb-6 lg:mb-0 mt-[50px]'>
        <h2 className='title font-bold text-4xl max-w-[245px] lg:mt-[80px] lg:mb-[90px]'>
          {title}
          </h2>
        <p className='max-w-[245px] lg:mb-12 '>{subtitle}</p>
        <div className='hidden lg:flex items-center '>
          <a className='hover:border-b border-primary lg:items-center  transition-all ' href='#'>
            {link}
            </a>
            <div className='text-3xl'>{icon}</div>
        </div>
      </div>
      {/* slider */}
      <div>
        
      </div>
      <div className='max-w-[800px]  ml-[11rem] '>
      <NewItemSlider />
      </div>
      </div>
    </div>
  </section>
};

export default NewItems;
