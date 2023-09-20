import React, { useState } from 'react';
import './Sign_in.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    area: '',
    district: '',
    division: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <div className="intro">
        <div className="middle">
          <h1>Welcome</h1>
          <p>You are a step away to join our largest Community</p>
          <h5>Already have an account?</h5>
          <button type="submit" className='btn5'>Log In</button>
          <i class="bi bi-facebook"></i>
        </div>
      </div>
      <div className="form-container">
        <h2>Register Now!</h2>
        <p>Fill the information carefully</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area"
            />
          </div>
          <div>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
            />
          </div>
          <div>
            <input
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              placeholder="Division"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button type="submit" className='btn5'>Sign In</button>
          </div>
          <p>Already have an account?<span> LogIn</span></p>
        </form>
      </div>
      
    </div>
  );
};

export default SignIn;
