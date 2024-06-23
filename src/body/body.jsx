import '../App.css';
import Center from'./center';
import CustomerSatellite from'./customerSatellite';
import Lunchers from './lunchers';
import Spacecrafts from'./spacecraft';

function body() {
  return (
    <div className="mainContent">
      <Center/>
      <CustomerSatellite/>
      <Lunchers/>
      <Spacecrafts/>
    </div>
  )
}

export default body