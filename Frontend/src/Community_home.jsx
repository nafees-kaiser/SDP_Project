import React from "react";
import style from "./Community_home.module.css"
import Navbar from "./Components/Navbar";
import CraftForm from "./Components/CraftForm";
import Footer from "./Components/Footer";
import Message from "./Components/messagebox";
import Message_pic from "./Components/Message_pic";
const Community_home = ()=>{
    const buyerId = sessionStorage.getItem("buyer_id");

    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
            <div className={style.container}>
                <div className={style.up}>
                    <Message text="hello djdnkfbfhb"/>
                    <Message_pic text="heljewgkjwhjkwrhyrjhywuoyhrognsgnbjsdfkgjnroehoruhyonyleyjlhyndfh.awtj'P6U4-96HYYblo"/>
                    <Message_pic text="hello"/>
                    <Message_pic text="hello"/>
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
