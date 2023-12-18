import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css'

const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login in a user...");
    const result = await firebase.singinUserWithEmailAndPass(email, password);
    console.log("Successfull", result);
  };
  return (
    <div className="body">
      <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div class="login-form-group">
            <label for="username">Email:</label>
            <input type="text" id="username" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div class="login-form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div class="login-form-group">
            <button type="submit">Login</button>
          </div>
          <div class="login-options">
            <p><a href="forgot_password.html">Forgot Password?</a></p>
            <p><Link to="/register">New User? Sign Up</Link></p>
          </div>

        </form >
      </div >
    </div>
  )
}

export default Login
