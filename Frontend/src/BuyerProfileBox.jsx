// import React, {useState, useEffect} from "react";
import { useState, useEffect } from "react";
import styles from "./BuyerProfileBox.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const BuyerProfileBox = (props) => {

  const [data, setData] = useState({});
  const [messagebox,setmessagebox] = useState(false);
  const buyerId = sessionStorage.getItem("buyer_id");
  console.log(props.value); 
  const navigate = useNavigate();
  const callbackmessage = () => {
    setmessagebox(true);
    props.callback(true)
  }
  

  useEffect(() => {
    axios.get(`http://localhost:3000/buyer_profile/${buyerId}`)
      .then((response) => {
        setData(response.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [buyerId]);

  const handleSignOut = () => {
    // Clear sessionStorage when the "Sign Out" button is clicked
    sessionStorage.clear();
    navigate('/');
  };


  return (
    <>
    <div className={styles.buyerProfileDropdown}>
      {/* <button className={styles.b}onClick={closemodel}>X</button> */}
      <div className={styles.border} />
      <Link to={`/buyer_profile`} className={styles.header}>
        <img className={styles.pictureIcon} alt="" src={data.img} />
      </Link>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.welcome}>
        Welcome to the world of passionate craft enthusiasts – let us embark on
        a journey of discovering your unique preferences in crafts
      </div>
      <button className={styles.cart} onClick={()=>{navigate('/checkout')}}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconShoppingBag}
          alt=""
          src="/images/-icon-shoppingbag.svg"
        />
        <div className={styles.myCart}>My Cart</div>
      </button>
      {/* </Link> */}
      <button className={styles.wishlist}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconActionHeartLoveLikeR}
          alt=""
          src="/images/-icon-action-heart-love-like-romantic-icon.svg"
        />
        <div className={styles.wishlist1}><Link to={`/Wishlist`}>Wishlist</Link></div>
      </button>
      <button className={styles.chat}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconCommunicationBubbleTex}
          alt=""
          src="/images/-icon-communication-bubble-texting-chat-comment-talk-speech-icon.svg"
        />
        <div className={styles.messages} onClick={callbackmessage}>Messages</div>
      </button>
      <button className={styles.notification}>
        <div className={styles.cartChild} />
        <img className={styles.iconBell} alt="" src="/images/-icon-bell.svg" />
        <div className={styles.notification1}>Notification</div>
      </button>
      <button className={styles.myOrders}>
        <div className={styles.myOrdersChild} />
        <img
          className={styles.iconNavIconListA}
          alt=""
          src="/images/-icon-nav-icon-list-a.svg"
        />
        <div className={styles.myOrders1}>My Orders</div>
      </button>
      {/* <button className={styles.track}>
        <div className={styles.trackChild} />
        <img className={styles.iconZoomPan} alt="" src="/images/-icon-zoom-pan.svg" />
        <div className={styles.trackingOrders}>Tracking Orders</div>
      </button> */}
      <button className={styles.track}>
        <div className={styles.trackChild} />
        <img
          className={styles.iconPeopleCommunity}
          alt=""
          src="/images/-icon-people-community.svg"
        />
        <div className={styles.trackingOrders}>Go to Craft Community</div>
      </button>
      <button className={styles.community} onClick={handleSignOut}>
        <div className={styles.myOrdersChild} />
        <img className={styles.iconPeopleCommunity} alt="" src="/images/-icon-logout.svg" />
        <div className={styles.goToCraft}>Sign Out</div>
      </button>
    </div>
    </>

  );
};

export default BuyerProfileBox;
