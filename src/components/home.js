import React from 'react'
import Navbar from '../components/navBar'
import Carousel from '../components/Carousel'
import AllInsurerance from '../components/AllInsurance'
import Reviews from '../components/review'
import Benefits from '../components/benifits'
import InsuranceDekhoWorks from '../components/how_works'
import Footer from '../components/footer'
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
         <InsuranceDekhoWorks></InsuranceDekhoWorks>*
         
        <Footer></Footer>
      </div>
    )
  
}
  export default Home