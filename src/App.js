import React from 'react';
 import logo from './logo.svg';
import './App.css';
import TransitionsModal from './employee/add_employee';
import DenseTable from './employee/employee_table';

// import Employee_details from './employee/employee_details';
//import Add_employee from './employee/add_employee';
import PopupModal from './employee/edit_employee';
import EditModal from './employee/edit_employeenew';
import NewTable from './employee/employee_tablenew';

function App() {
  return (
    <div className="App">
      <TransitionsModal/>
 
      {/* <PopupModal/> */}
   
      <NewTable/> 
      {/* <Employee_details/> */}
      {/* <Add_employee/> */}



    </div>
  );
}

export default App;
