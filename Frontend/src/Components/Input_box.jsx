import React from "react";
import style from "./Input_box.module.css";
const Input_box = (props)=>{
    return (
        <>
            <div className={style.type}>
                <p>{props.name}<span>*</span></p>
                <input 
                    type="text"
                    placeholder={props.placeholder}
                
                />
            </div>
        </>
    )
}
export default Input_box;