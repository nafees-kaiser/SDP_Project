import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import loginImage from './assets/react.svg'; // Import your login image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="left-content">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="right-content">
          <form onSubmit={handleSubmit}>
            <h2>LogIn</h2>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="email" className="animated-placeholder">
                Email
              </label>
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label htmlFor="password" className="animated-placeholder">
                Password
              </label>
            </div>
            <div className="btng">
                <button type="submit">Login</button>
                <button type="submit">Sign In</button>
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
