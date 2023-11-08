import React, { useEffect, useState } from "react";
import Style from "./Messaging.module.css";
import Button from "./Components/Button.jsx";
import Message from "./Components/messagebox.jsx";
import Message2 from "./Components/messagebox_2.jsx";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";

/*
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000")
*/
const Messaging = () => {
  const [socket,setsocket] = useState(null);
  const [UserId,setUser] = useState(sessionStorage.getItem("buyer_id"));
  const id = "651c5377783c0719018cd17f"
  useEffect(()=>{
    setsocket(io("http://localhost:8080"))
    console.log(UserId)
  },[])
  useEffect(()=>{
    
    socket?.emit('addUser',UserId)
    socket?.on('getUsers',users =>{
      console.log('Buyer_activeUsers:  ',users)
    })
    
  },[socket])

  const [isLeftHovered, setIsLeftHovered] = useState(false);

  const handleLeftHover = () => {
    setIsLeftHovered(true);
  };

  const handleLeftHoverOut = () => {
    setIsLeftHovered(false);
  };

  return (
    <>
      <div className={Style.container}>
        <div className={Style.top}>
          <div className={Style.left}></div>
          <div
            className={Style.right}
            style={{
              width: isLeftHovered ? "80%" : "90%", // Increase the width of right div when left is hovered
            }}
          >
            <p>Shahabuddin Akhon</p>
          </div>
          <div className={Style.btn}>
            <button>X</button>
          </div>
        </div>
        <div className={Style.middle}>
          <div
            className={Style.left}
            onMouseEnter={handleLeftHover}
            onMouseLeave={handleLeftHoverOut}
            style={{
              width: isLeftHovered ? "37%" : "17%", // Increase the width of left div when hovered
            }}
          >
            <div className={Style.image} style={{ backgroundColor: "#E9E9E9" }}>
              <img src="./images/361962641_824993792357321_2542727162223495145_n.jpg" alt="" />
              <p>Shahabuddin</p>
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
          <div
            className={Style.right}
            style={{
              width: isLeftHovered ? "63%" : "83%", // Decrease the width of right div when left is hovered
            }}
          >
                <div className={Style.up}>
                <Message text={"Hello"} />
                <Message2 text={"Hi"} />

                <Message
                    text={
                    "nglknfkldhnlhglnjhnglbnrojrphgipe'wprgjr'ghjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
                    }
                />
                </div>
            <div className={Style.down}>
              <input type="text" />
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messaging;
