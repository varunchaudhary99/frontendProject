
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home';
import Car from './components/pages/car_insurance'
import Bike from './components/pages/bike_insurance'
import Health from './components/pages/health_insurance'
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike/>} />
        <Route path="/health" element={<Health />} />
      
    </Routes>
  
  );
}

export default App;
