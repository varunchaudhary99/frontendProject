import Navbar from '../../components/navBar'
import Footer from "../footer";
import TabBar from '../tabbar';
import InsuranceCard from './insuranceCard';
function Car (){
  return (
    <div>
   <div className='container-fluid'>
        <Navbar/>
        <TabBar></TabBar>
        <InsuranceCard></InsuranceCard>

       
<Footer></Footer>
  </div>
  </div>
  )
}

export default Car