import React, { useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import "../App.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate=useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
      });
      const token = response.data.token;
      // Store token in local storage or context for subsequent requests
      console.log(token);
    } catch (error) {
      console.error(error);
    }
    navigate("/home")
  };
 


  return (
    <div className='booking'>
      <h2>Welcome To Ticket Booking</h2>
      <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control w-50"
              placeholder="Enter a UserName" value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <label class="form-label" for="form3Example3">UserName</label>
          </div>
       <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control w-50"
              placeholder="Enter password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>
    
      <button type="button" class="btn btn-primary btn-lg"
              style={{"padding-left":"2.5rem", "padding-right": "2.5rem"}} onClick={handleLogin}>Login</button>
     
    </div>
  );
};

export default Login;

