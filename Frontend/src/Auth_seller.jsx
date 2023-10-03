import React, { useEffect, useState } from "react";
import style from './Authentication.module.css'
import Button from './Components/Button.jsx'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Authentication = ({closemodel,data1,formData})=>{
    let [code,setcode] = useState("");
    
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return ()=>{
            document.body.style.overflowY = "scroll";
        }
    },[])
    

    const navigate = useNavigate();
    const changeCode = (event)=>{
        setcode(event.target.value);
    }
    const codesubmit = async (event)=>{
        event.preventDefault();
        try {
            console.log("React_auth: "+data1);
            console.log("React_auth: "+code);
            if(code == data1){


                const response = await axios.post('http://localhost:3000/register_seller', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 201) {
                    
                    console.log('Registration successful');
                    alert("Registration Successful");
                    navigate('/home_seller');
                } else {
                    console.log(response.status);
                    console.error('Registration failed');
                }

                
            }
            else {
                closemodel();
                alert("Wrong Code given");
            }
            
        } catch (error) {
            console.error('Error:', error);
            console.error('Registration failed(catch at Auth)');
        }
        
    }
    return (
        <>
            <div className={style.back}>
                <div className={style.container}>
                    <button className={style.bt} onClick={closemodel}>X</button>
                    <div className={style.inner}>
                        <div className={style.image}>
                            <img src="../images/384165997_332969559130939_1111385360839973004_n.png" alt="" />
                        </div>
                        <h2>User Authentication</h2>
                        <p>We have send verification code to your gmail</p>
                        <form onSubmit={codesubmit}>
                            <div className={style.box}>
                                <input 
                                    type="text"
                                    placeholder="Authentication Code"
                                    onChange={changeCode}
                                    value={code}
                                        />
                            </div>
                            <Button text="Submit"/>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Authentication;