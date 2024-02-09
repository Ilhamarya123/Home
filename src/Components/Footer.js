import React from 'react';

//import logo
import logo from '../assets/img/logo.svg';


//import data
import {footer} from '../data';


const Footer = () => {
  return <footer className=' section bg-primary text-white '>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14 '>
      <a className='mb-6  lg:mb-0 mt-10' href='#'>
        <img src={logo} alt='' />
      </a>
      {/* social   */}
      <div className='flex fap-x-4 mt-10'>
        {footer.social.map((item,index) => {
          return <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accnet rounded-full flex justify-center items-center transition' key={index}>
            <a href='#'>{item.icon}</a></div>
        })}
      </div>
    </div>
    {/* copyright */}
      <p className='text-center '>
        &copy furniShop 2022 - All right reserved.
      </p>
    </div>
    </footer>;
};

export default Footer;
