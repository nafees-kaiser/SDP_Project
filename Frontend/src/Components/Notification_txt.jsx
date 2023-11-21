import React from "react";
import Style from "./notification_txt.module.css"

const Notification = ({name,pic,text,time})=>{
    
    return (
        <>
            <div className={Style.another}>
                <div className={Style.round}>
                    <img src={pic} alt="" />
                </div>
                <div className={Style.anotherone}>
                    <div className={Style.box}>
                        <p><span>{name}</span>{text}</p>
                        <h5>{time}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification;