import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import pic from "./P1.jpeg";
import sic from "./P2.jpeg";
import aic from "./P3.png";
const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({ status: true, msg: "Password Changed Successful", type: "success" });
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" })
    }
  };
  return <>
    <div sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 2000, mx: 3 }}>
      <h1></h1>
      <div component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
        
      
           <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 2, marginLeft: '.5rem'}}> Home</Button>
          
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 2, marginLeft: '.5rem' }}> Course Content</Button>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5, marginLeft: '.5rem' }}> Exams/Assignment</Button>
          
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5, marginLeft: '.5rem'}}>Performance</Button>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
    <h1> Your Performance  </h1>
    <img src={pic} />
</div>
<div style={{display: 'flex',  justifyContent:'left', alignItems:'center', height: '50vh'}}>
    <h1> Couse Update of Subject 1  </h1>
    <img src={sic} />
</div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
    <h1> Student Update of Subject 1  </h1>
    <img src={aic} />
</div>
  

       
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </div>
    </div>
  </>;
};

export default ChangePassword;
