import React, { useState } from 'react';
import Checkbox from './Components/Checkbox';
import './login.css';

const LogIn = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const changeEmail = (event) =>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const changePassword = (event) =>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container-login">
            
            <div className="body-wrapper">
                <div className="wrapper">
                    <div className="title">
                        <div className="heading">
                            <div className="logo">
                                <img src="./images/logo.png" alt="Logo" />
                            </div>
                            <h2 className="text-color font-family-header text-alignment">Welcome</h2>
                            <span className="text-color text-alignment">
                                To keep connected with us please Login
                            </span>
                        </div>
                        <p className="text-color text-alignment">Not have any account?</p>
                        <button className="button">Sign up</button>
                    </div>
                    <form onSubmit={formSubmit} className="input">
                        <h1 className='text-alignment'>User Login</h1>
                        {/* <div class="icons">
                  <a href="#"><img src="#" alt="icon"></a>
                  <a href="#"><img src="#" alt="icon"></a>
                  <a href="#"><img src="#" alt="icon"></a>
              </div> */}
                        <div className="textboxes">
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                onChange={changeEmail}
                                value={email}
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={changePassword}
                                value={password}
                            />
                            <Checkbox name="Remember me"/>
                        </div>
                        <div className="buttons">
                            <button className="button">Log in</button>
                            <button className="button">Forget password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LogIn