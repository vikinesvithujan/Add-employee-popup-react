import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../employee/employee_details.css'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <button type="button" className="b1" onClick={handleOpen}>
        Add Employee
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Employee</h2>
            
            <div>
<form className=" "  >
    <div >

<label>Employee Id:</label>
<input type="text" id="" className="" placeholder="Employee Id"></input>
<br/>

<label>Employee Name:</label>
<input type="text" id=""  className="" placeholder="Employee Name"></input>
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
<input type="text" id="" className="" placeholder="Email"></input>

</div>
</form>
<input type="submit" className="" value="cancel" onClick="onClose"></input>
<input type="submit" className="" value="OK" onclick=""></input>





            </div>
          </div>
        </Fade>
      </Modal>
    </div>



  );
}
