import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee_details from './employee/employee_details';
//import Add_employee from './employee/add_employee';
import TransitionsModal from './employee/add_employee';
function App() {
  return (
    <div className="App">
      <Employee_details/>
      {/* <Add_employee/> */}
      <TransitionsModal/>



    </div>
  );
}

export default App;
