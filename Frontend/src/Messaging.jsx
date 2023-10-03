import React from "react";
import Style from "./Messaging.module.css";
import Button from "./Components/Button.jsx"
const Messaging = ()=>{
    return (
        <>
            <div className={Style.container}>
                <div className={Style.top}>
                    <p>Shahabuddin Akhon</p>
                </div>
                <div className={Style.middle}>
                    <div className={Style.left}>
                        <div className={Style.image} style={{backgroundColor:"#E9E9E9"}}>
                            <img src="./images/361962641_824993792357321_2542727162223495145_n.jpg" alt="" />
                        </div>
                        <div className={Style.image}>
                            <img src="./images/383763472_302080962517792_2973636626530534800_n.jpg" alt="" />
                        </div>
                        <div className={Style.image}>
                            <img src="./images/384140582_169297479551263_3491688258618327277_n.jpg" alt="" />
                        </div>
                        <div className={Style.image}>
                            <img src="./images/361962641_824993792357321_2542727162223495145_n.jpg" alt="" />
                        </div>
                    </div>
                    <div className={Style.right}>
                        <div className={Style.up}></div>
                        <div className={Style.down}>
                            <input type="text" />
                            <button type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Messaging;