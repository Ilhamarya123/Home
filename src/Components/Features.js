import React from 'react';


//import data
import {features} from '../data';

const Features = () => {

  // destructure features
  const { title,subtitle,image,buttonText,items} = features;


  return <section className='section '>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row lg:gap-x-[100px] '>
        {/* image */}
        <div className='flex-1 mt-[5rem]  order-1 lg:order-1'>
          <img src={image.type} alt=''></img>
        </div>
         {/* text  */}
          <div className='flex-1 flex flex-col justify-end '>
            <h2 className='title font-bold text-4xl mb-5'>{title}</h2>
            <p className='subtitle mb-5'>{subtitle}</p>
            {/*items */}
            <div>
              {items.map((item,index)=> {
                // destructive items
                const{title, subtitle, icon} =item;
                return(
                  <div className='flex mb-6 lg:last::mb-0'>
                    <div className='text-2xl mr-4 lg:text-3xl '>{icon}</div>
                    <div>
                      <h4 className='text-base lg:text-xl font-bold mb-3'>{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

      </div>
    </div>
  </section>
};

export default Features;
