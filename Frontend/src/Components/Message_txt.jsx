import React, { useState } from "react";
import Style from "./message_txt.module.css";
import axios from "axios";

const Message = ({ img,user,post,name, text, time, id,like }) => {
  const [isLiked, setIsLiked] = useState(false);

  const increaseLike = () => {
    setIsLiked(true);  // Set state to true when liked
    if(!isLiked){
        axios.post(`http://localhost:3000/community/${id}`)
          .then((res) => {
            console.log("Updated");
          })
          .catch((err) => {
            console.log(err);
        });
        axios.post(`http://localhost:3000/notifications`,{
          senderId: user,
          receiverId: post,
          notificationDescription: ' Liked your Post'
        })
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.error(err);
        })
      
    }
    else {
        setIsLiked(false)
    }
  };

  return (
    <>
      <div className={Style.another}>
        <div className={Style.round}>
          <img src={img} alt="" />
        </div>
        <div className={Style.anotherone}>
          <div className={Style.text}>
            <p>{name}</p>
            <h5>{time}</h5>
          </div>
          <div className={Style.box}>
            <p>{text}</p>
          </div>
          <div style={{color:"#8b8b8b"}}>
            {isLiked? <p>{like} likes including you</p> : <p>{like}likes</p>}
          </div>
          <div className={Style.like}>
            <i
              className={`fa-regular fa-thumbs-up ${isLiked ? Style.liked : ''}`}
              style={{ color: isLiked ? 'red' : '#795AAC' }}
              onClick={increaseLike}
            ></i>
            <i className="fa-solid fa-reply" style={{ color: "#795AAC" }}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
