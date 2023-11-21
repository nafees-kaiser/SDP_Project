import React from "react";
import style from "./Community_home.module.css"
import Navbar from "./Components/Navbar";
import CraftForm from "./Components/CraftForm";
import Footer from "./Components/Footer";
import Message from "./Components/messagebox";
import Message_pic from "./Components/Message_pic";
import Message_txt from "./Components/Message_txt.jsx";
import { useDispatch, useSelector } from 'react-redux';
import Notification from "./Notification.jsx";
const Community_home = ()=>{
    const buyerId = sessionStorage.getItem("buyer_id");
    const notification = useSelector(state => state.toggle)
    const dispatch = useDispatch();
    
    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
            {notification.toggle && <Notification/>}
            <div className={style.container}>
                <div className={style.up}>
                    <Message_pic text="heljewgkjwhjkwrhyrjhywuoyhrognsgnbjsdfkgjnroehoruhyonyleyjlhyndfh.awtj'P6U4-96HYYblo"/>
                    <Message_pic text="hello"/>
                    <Message_pic text="hello"/>
                    <Message_txt text="hehdkhdhkcgyudvc cguydgedb"/>
                </div>
                <div className={style.down}>
                    <div className={style.image}>
                        <i class="fa-solid fa-circle-plus"></i>
                    </div>
                    <input 
                        type="text"
                        placeholder="Write message"
                    />
                    <button type="submit">Send</button>
                </div>
            </div>
            <Footer/>
        
        </>
    )
}
export default Community_home;
