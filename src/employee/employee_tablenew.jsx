import React, { useState } from 'react';
// import PopupModal from './employee/edit_employee';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditEmployee from './edit_employeenew'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreIcon from '@material-ui/icons/More';
import SearchIcon from '@material-ui/icons/Search';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(id, name, designation, email, edit) {
  return { id, name, designation, email, edit };

}

const rows = [
  createData(1, 'Vithujan', 'Admin', 'vithujan@gmail.com'),
  createData(2, 'Vinojan', 'HR', 'vinoj@gmail.com'),
  createData(3, 'Mithusan', 'USER', 'mithusan@gmail.com'),
  createData(4, 'Mathusanth', 'QA', 'mathusanth@gmail.com'),
  createData(5, 'Sathurjan', 'PM', 'sathun@gmail.com'),
];

export default function DenseTable() {
  const classes = useStyles();
  const [open,setOpen]=useState(false)

  const handleClose = () => {
    setOpen(false);
  };

  const handleClicks =()=>{
    setOpen(true)
    console.log(open)
  }
  return (
    
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
           
          <TableHead>
            <TableRow>
              <TableCell><strong>Emp Id</strong> <i><UnfoldMoreIcon/></i></TableCell>
              <TableCell align="right"><strong>Employee Name</strong> <i><SearchIcon/></i></TableCell>
              <TableCell align="right"><strong>Designation</strong> <i><SearchIcon/></i></TableCell>
              <TableCell align="right"><strong>Email</strong> <i><SearchIcon/></i></TableCell>
              <TableCell align="right" ><strong>Edit</strong> <i><SearchIcon/></i></TableCell> 
              <TableCell align="right"><strong>Delete</strong> <i><SearchIcon/></i></TableCell>
              <TableCell align="right"><strong>More Details</strong> <i><SearchIcon/></i></TableCell>
            </TableRow>
          </TableHead>
        
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.email}  </TableCell>
                <TableCell > <EditEmployee /></TableCell>
                <TableCell align="right">{row.delete} <i><DeleteIcon/></i> </TableCell>
                <TableCell align="right">{row.moredetails} <i><MoreIcon/></i> </TableCell>

                

                {/* <TableCell align="right">{row.edit}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
     
    </div>
  );
}

