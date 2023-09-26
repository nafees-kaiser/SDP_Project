import React from "react";
import Style from "./Button.module.css";


const Button = (t)=>{
    return (
        <>
            <div className={Style.button}>
                <button>{t.name}</button>
            </div>
        </>
    );
}
export default Button;