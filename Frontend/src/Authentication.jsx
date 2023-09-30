import React, { useEffect, useState } from "react";
import style from './Authentication.module.css'
import Button from './Components/Button.jsx'
import { useNavigate } from "react-router-dom";

const Authentication = ()=>{
    let [code,setcode] = useState("");
    /*
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        document.body.style.filter = "blur(8px)"
    },[])
    */
    const navigate = useNavigate();
    const changeCode = (event)=>{
        setcode(event.target.value);
    }
    const codesubmit = async (event)=>{
        event.preventDefault();
        console.log("React_auth: "+code);
    }
    return (
        <>
            <div className={style.back}>
                <div className={style.container}>
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