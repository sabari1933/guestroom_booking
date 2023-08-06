import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    var config = { headers: { "enctype": "multipart/form-data" } };
    // Perform login API call here
    axios.post("http://localhost:33/login", email, password,config)
    .then(function (res) {
        if (res.data.status == 'error') {
            alert('error')
            navigate("/dashbord")
            console.log(res.data);
        } else if (res.data.status == 'success') {
            alert('success')
           
            console.log(res.data);

        }
    })

  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-70 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
      <label>Email:</label><br/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>

      <label>Password:</label><br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

      <button type="submit">Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;
