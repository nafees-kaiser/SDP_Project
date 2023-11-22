import React from "react";
import Style from "./message_pic.module.css"

const message = ({name,text,attachment,time})=>{
    
    return (
        <>
                <div className={Style.another}>
                    <div className={Style.round}>
                        <img src=".\images\384194017_640104084770772_829708242717613349_n.jpg" alt="" />
                    </div>
                    <div className={Style.anotherone}>
                        <div className={Style.text}>
                            <p>{name}</p>
                            <h5>{time}</h5>
                        </div>

                        <div className={Style.box}>
                            <p>{text}</p>
                        </div>
                        <div className={Style.inner_pic}>
                            <img src={attachment} alt="" />
                        </div>
                        
                        <div className={Style.like}>
                            <i class="fa-regular fa-thumbs-up"></i>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default message;