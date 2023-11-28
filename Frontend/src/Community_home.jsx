import React, { useEffect } from "react";
import style from "./Community_home.module.css"
import Navbar from "./Components/Navbar";
import CraftForm from "./Components/CraftForm";
import Footer from "./Components/Footer";
import Message from "./Components/messagebox";
import Message_pic from "./Components/Message_pic";
import Message_txt from "./Components/Message_txt.jsx";
import { useDispatch, useSelector } from 'react-redux';
import Notification from "./Notification.jsx";
import { get_community_data } from "./Actions/community.jsx";
const Community_home = ()=>{
    const buyerId = sessionStorage.getItem("buyer_id");
    const notification = useSelector(state => state.toggle)
    const {isLoading,error,data} = useSelector(state => state.communityValue)
    console.log(data)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_community_data())
    },[])
    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
            {notification.toggle && <Notification/>}
            <div className={style.container}>
                <div className={style.up}>
                    {isLoading && <h1>Loading.............</h1>}
                    {Array.isArray(data)? ( data.map((value) => (
                            value.attachment? (<div key={value.id}>
                                <Message_pic name={value.user.name} attachment={value.attachment} text={value.message} time={value.date}/>
                            </div>):(<Message_txt name={value.user.name} text={value.message} time={value.date}/>)
                        )) ):(<p>No Notification</p>)}

                </div>
                <div className={style.down}>
                    <div className={style.image}>
                        <i className="fa-solid fa-circle-plus"></i>
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
