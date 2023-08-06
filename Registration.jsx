import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
const [values, setValues] = useState({
    email: '',
    mobile: '',
    password: ''
   
})
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    var config = { headers: { "enctype": "multipart/form-data" } };
    // Perform registration API call here
    axios.post("http://localhost:33/register",values,config)
    .then(res => {
        console.log(res);
        alert("successfully")
        navigate('/login')

    })
    .catch(err => console.log(err))
  };

  return (

    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
      <label>Email:</label><br/>
      {/* onChange={e => setValues({ ...values, student_name: e.target.value })} */}
      <input type="email" onChange={e => setValues({ ...values, email: e.target.value })} required /><br/><br/>

      <label>Mobile:</label><br/>
      <input type="text"  onChange={e => setValues({ ...values, mobile: e.target.value })} required /><br/><br/>


      <label>Password:</label><br/>
      <input type="password" onChange={e => setValues({ ...values, password: e.target.value })} required /><br/><br/>


      <button type="submit">Register</button>
    </form>
    </div>
    </div>
  );
};

export default Registration;
