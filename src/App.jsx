import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Mark from './components/Mark';
import About from './components/About';
import Eyes from './components/Eyes';
import Features from './components/Features';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen' >
      <Navbar/>
      <LandingPage/>
      <Mark/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
