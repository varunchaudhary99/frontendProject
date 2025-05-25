
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home';
import Car from './components/pages/car_insurance'
import Bike from './components/pages/bike_insurance'
import Health from './components/pages/health_insurance'
import Investment from './components/pages/investment';
import Register from './components/pages/registerpopup';
import Family from './components/pages/family';
import Trem from './components/pages/trem';
import Business from './components/pages/business';
import Guaranteed from './components/pages/guaranteed';
import AdvisorPage from './components/pages/advisorpage'
import AdminNavBar from './components/pages/adminNavBar';
import AdminPanelCar from './components/pages/adminPannelcar';
import AdminPanelBike from './components/pages/adminpanelbike';
import AdminPanelHealth from './components/pages/adminhealth';
import AdminPanelTrem from './components/pages/adminpanelterm';
import AdminPanelBusiness from './components/pages/adminpanelbusiness';
import AdminPanelFamily from './components/pages/adminpanelFamily';
import AdminPanelGranteed from './components/pages/adminpanelGaranteed';
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike/>} />
        <Route path="/health" element={<Health />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bike" element={<Bike/>} />
        <Route path="/health" element={<Health />} />
        <Route path="/trem" element={<Trem />} />
        <Route path="/family" element={<Family/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/guaranteed" element={<Guaranteed/>} />
        <Route path="/findAdvisor" element={<AdvisorPage/>}></Route>
        <Route path="/adminNavbar" element={<AdminNavBar/>}></Route>
         <Route path="/adminCar" element={<AdminPanelCar/>}></Route>
          <Route path="/adminBike" element={<AdminPanelBike/>}></Route>
          <Route path="/adminHealth" element={<AdminPanelHealth/>}></Route>
          <Route path="/adminTrem" element={<AdminPanelTrem/>}></Route>
          <Route path="/adminBusiness" element={<AdminPanelBusiness/>}></Route>
          <Route path="/adminFamily" element={<AdminPanelFamily/>}></Route>
           <Route path="/register" element={<Register/>}></Route>
             <Route path="/adminGranteee" element={<AdminPanelGranteed/>}></Route>
    </Routes>
  
  );
}

export default App;
