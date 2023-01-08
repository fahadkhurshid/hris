import React,{useState} from 'react';
import axios from 'axios';
import './AddUser.css';
import { Grid, TextField, Button, Card, CardContent} from '@mui/material';


function AddUser() {
  const [addUserFormData, setAddUserFormData] = useState({fName:'',lName:'',contact:'',empType:'',empField:'',empRole:'',address:''});
  const formSubmit = (event) => {
    event.preventDefault();
    console.log(addUserFormData);
    axios.post('http://localhost:80/hris/add_user', addUserFormData)
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const {name,value} = event.target;

    setAddUserFormData((preValue)=>{
      console.log(preValue);
      return {
        ...preValue,
        [name] : value
      };
    })
  }

  return (
    <div className="App">
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={formSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" name='fName' onChange={inputEvent} value={addUserFormData.fname} label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" name='lName' onChange={inputEvent} value={addUserFormData.lname} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Employee Type" label="employee type" name='empType' onChange={inputEvent} value={addUserFormData.empType} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Employee Field" label="employee Field" name='empField' onChange={inputEvent} value={addUserFormData.empField} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Employee Role" label="employee role" name='empRole' onChange={inputEvent} value={addUserFormData.empRole} variant="outlined" fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" name='contact' onChange={inputEvent} value={addUserFormData.contact} variant="outlined" fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField label="Address" multiline rows={4} placeholder="Type your address here" onChange={inputEvent} value={addUserFormData.contact} variant="outlined" fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth >Add</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default AddUser;