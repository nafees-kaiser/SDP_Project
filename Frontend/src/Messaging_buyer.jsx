import React, { useEffect, useState } from "react";
import Style from "./Messaging.module.css";
import Message from "./Components/messagebox.jsx";
import Message2 from "./Components/messagebox_2.jsx";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";

/*
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000")
*/
const Messaging = (props) => {
  const [socket,setsocket] = useState(null);
  const [conversation,setconversation] = useState();
  const [messages,setmessage] = useState();
  const [name,setname] = useState();
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
  useEffect(()=>{
    axios.get(`http://localhost:3000/message/conversation/${UserId}`)
    .then((res)=>{
      console.log(res.data)
      const mappedUser = res.data.map((order, index) => ({
        User_ID: order.user.id,
        name: order.user.fullName,
        email: order.user.email,
        img:order.user.image,
        conversation:order.conversationId
      }));
      setconversation(mappedUser)
      console.log("MAP: ", mappedUser)
    })
    .catch((err)=>{
      console.error(err);
    })
  },[])
  const handleLeftHover = () => {
    setIsLeftHovered(true);
  };

  const handleLeftHoverOut = () => {
    setIsLeftHovered(false);
  };
  const ConBegin = (id,name)=>{
    axios.get(`http://localhost:3000/message/${id}`)
    .then((res)=>{
      console.log(res.data)
      setmessage(res.data)
      setname(name);
    })
    .catch((err)=>{
      console.error(err);
    })
  }

  return (
    <>
      <div className={Style.container}>
        <div className={Style.top}>
          <div
            className={Style.right}

          >
            {(name)? (<p>{name}</p>):<div><p style={{
              "font-size": "22px",
              "margin-left": "68px",
              "margin-top": "7px"}}
             >Not selected any message</p></div>}
            <div className={Style.btn}>
              <button onClick={props.closemessage} style={{textAlign: "right"}}>X</button>
            </div>
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
            {(conversation && conversation.length > 0 )? (
              conversation.map((order, index) => (
                <div key={index} style={{
                      border: "1px solid #999DEE",
                      overflow: "hidden"
                  }}  >
                  <div className={Style.image}  onClick={()=>ConBegin(order.conversation,order.name)}>
                    <img src={order.img} alt="" />
                    <p>{order.name}</p>
                  </div>
                </div>
              ))
            ):<div><h1>No Conversation</h1></div>}












          </div>
          <div
            className={Style.right}
            style={{
              width: isLeftHovered ? "63%" : "83%", // Decrease the width of right div when left is hovered
            }}
          >
                <div className={Style.up}>
                {messages? (messages.map((message, index) => (
                  <div key={index}>
                    {message.message ? (
                      message.user.tag === 'seller' ? (
                        <Message text={message.message} />
                      ) : (
                        <Message2 text={message.message} />
                      )
                    ) : (
                      <div>
                        <p style={{
                          "font-size": "22px"
                        }}>Not selected any message</p>
                      </div>
                    )}
                  </div>
                ))
                ): (<><p>Loading..........</p></>)}



                  {/*
                  <Message text={"Hello"} />
                  <Message2 text={"Hi"} />
                  <Message2 text={"Hi"} />
                  <Message text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  <Message2 text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  <Message text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  <Message2 text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  <Message text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  <Message2 text={"Hinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
                  */}
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
