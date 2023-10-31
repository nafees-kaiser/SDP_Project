import React from "react";
import Style from "./messagebox_2.module.css"

const message = ({text})=>{
    
    return (
        <>
            
            <div className={Style.box}>
                <p>{text}</p>
            </div>
        </>
    )
}
export default message;