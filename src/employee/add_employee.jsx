import React, { Component } from 'react';
import '../employee/add_employee.css'
class Add_employee extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
<form className="">
    <div>
        
<label>Employee Id:</label>
<input type="text" id="" className="" placeholder="Employee Id"></input>
<br/>

<label>Employee Name:</label>
<input type="text" id="" className="" placeholder="Employee Name"></input>
<br/>

<label>Designation:</label>
<select id="" className="">
    <option value="ADMIN">ADMIN</option>
    <option value="USER">USER</option>
    <option value="HR">HR</option>
    <option value="PM">PM</option>
    <option value="QAL">QAL</option>
    <option value="TECL">TECL</option>
    <option value="QA">QA</option>
    <option value="DEV">DEV</option>
  </select>
<br/>

<label>Email:</label>
<input type="Email" id="" className="" placeholder="Email"></input>

</div>
</form>
<input type="button" className="" value="cancel" onClick=""></input>
<input type="button" className="" value="OK" onclick=""></input>





            </div>
         );
    }
}
 
export default Add_employee;