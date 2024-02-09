import React from 'react';
import './App.css';

//import components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import NewItmes from './Components/NewItems';
import FeaturesSecond from './Components/FeaturesSecond';
import Products from './Components/Products';
import Testimonial from './Components/Testimonial';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';




function App() {
  return (
   <div className='w-full  max-w-[1440px] mx-auto bg-white'>
  <Header/>
  <Hero/>
  <Features/>
  <NewItmes/>
  <FeaturesSecond/>
  <Products/>
  <Testimonial/>
  <Newsletter/>
  <Footer/>

  
   </div>
  );
}

export default App;
