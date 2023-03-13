import React from 'react'
import Header from './Header';
import Slider from './MySlider';
import Slogan from './Slogan';
import Services from './Services';
import BlogSlider from './BlogSlider';
import Footer from './Footer';
import HowItWorks from './HowItWorks';

function Home() {
  return (
    <>
      <Slider/>
      <Slogan/>
      <Services/>
      <HowItWorks/>
      <BlogSlider/>
    </>
  )
}

export default Home
