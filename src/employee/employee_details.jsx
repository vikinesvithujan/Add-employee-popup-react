import React, { Component } from 'react';
import '../employee/employee_details.css'
import '../employee/add_employee.jsx'

class Employee_details extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="">
            <h2>Employee</h2>
            <input type="button" className="b1" value="Add Employee" onClick=""></input>
            <table id="" className="" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th className="">Emp ID
      </th>
      <th className="">Employee Name
      </th>
      <th className="">Designation
      </th>
      <th className="">Email
      </th>
      <th className="">Edit
      </th>
      <th className="">Delete
      </th>
      <th className="">More Details
      </th>
    </tr>
  </thead>
  </table>

</div>

         );
    }
}
 
export default Employee_details;