import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import HotDesserts from './components/HotDesserts/HotDesserts';
import Banner from './components/Banner/Banner';
import Popular from './components/popular/Popular';
import Footer from './components/Footer/Footer';
import CartTab from './components/Carttab/carttab';

const App = () => {
  return (
    <div className='overflow-x-hidden bg-red'>
    
      <div> </div>
    <Navbar/>
    <Hero/>
    <HotDesserts/>
    <Banner/>
    <Popular/>
    <Footer/>
    <CartTab/>
    </div>

  )
}

export default App
