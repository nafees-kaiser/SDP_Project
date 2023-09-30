import React, { useState } from 'react';
import Authentication from './Authentication.jsx'
import axios from 'axios';
import style from "./Registration.module.css"; // Import your CSS module
import Button from './Components/Button';
import {useNavigate} from 'react-router-dom';

const Registration = () => {
    const [auth,setAuth]= useState(false);
    const btn = ()=>{

        setAuth(true);
    }
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
    const navigate= useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Send the registration data to the server for processing
          
          
          const verify_code = await axios.post('http://localhost:3000/verify', formData, {
          headers: {
                'Content-Type': 'application/json',
            },
          });
          if(verify_code.status == 200){
                const response = await axios.post('http://localhost:3000/register', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 201) {
                    const code = verify_code.data.data;
                    console.log(code);
                    console.log('Registration successful');
                    navigate('/');
                  } else {
                    console.log(response.status);
                    console.error('Registration failed');
                  }

           }
           console.log(verify_code.status);
      
          
        } catch (error) {
          console.error('Error:', error);
          console.error('Registration failed(catch)');
        }
      };

    return (
        <>
            { auth && <Authentication/>}
            
            <div className={style.middle2}>
                <div className={style.Middle}>
                    <div className={style.left}>
                        <img src="./images/shape.jpg" alt="" />
                        <h1>Welcome</h1>
                        <p>Join our largest Community</p>
                        <p>Already have an account?</p>
                        {/* <button className={style['btn-primary']}>LogIn</button> */}
                        <Button text="Login"/>
                    </div>
                    <div className={style.right}>
                        <h2>Register Now!</h2>
                        <p>Fill the information carefully</p>
                        <form onSubmit={handleSubmit}>
                            <div className={style.form}>
                                <div className={style.leftForm}>
                                    <div>
                                        <input
                                            name='name'
                                            placeholder='Name'
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='email'
                                            placeholder='Email'
                                            type="text"
                                            value={formData.email}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='mobileNumber'
                                            placeholder='Number'
                                            type="text"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                           
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='area'
                                            placeholder='Area'
                                            type="text"
                                            value={formData.area}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                </div>
                                <div className={style.rightForm}>
                                    <div>
                                        <input
                                            name='district'
                                            placeholder='District'
                                            type="text"
                                            value={formData.district}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='division'
                                            placeholder='Division'
                                            type="text"
                                            value={formData.division}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='password'
                                            placeholder='Password'
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name='confirmPassword'
                                            placeholder='Confirm Password'
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* <button type="submit" className={style.btn5}>Sign In</button> */}
                                <Button text="Sign in" change={btn} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Registration;
