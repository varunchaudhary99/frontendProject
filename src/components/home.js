import React from 'react'
import Navbar from '../components/navBar'
import Carousel from '../components/Carousel'
import AllInsurerance from '../components/AllInsurance'
import Reviews from '../components/review'
import InsuranceDekhoWorks from './pages/how_works'
import Benefits from '../components/benifits'
import Footer from '../components/footer'
import OurPartnersSlider from './ourPartnerSilder'
function Home() {
   
    return (
      <div className='container-fluid'>
        <Navbar/>
        
        <div className='box2'/>

        <Carousel></Carousel>

        <div className='spacebox'></div>
        <AllInsurerance></AllInsurerance>
         <Reviews></Reviews>
         <Benefits></Benefits>
         <InsuranceDekhoWorks/>
         <OurPartnersSlider></OurPartnersSlider>
        <Footer></Footer>
      </div>
    )
  
}
  export default Home