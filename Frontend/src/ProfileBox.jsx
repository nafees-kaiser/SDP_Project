import React, {useEffect, useRef,useState} from "react";
import styles from "./ProfileBox.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BuyerProfileDropdown = ({closemodel}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    area: '',
    district: '',
    division: '',
    password: '',
  });
  
  useEffect(() => {
    const seller_id = sessionStorage.getItem('seller_id');
    axios.get(`http://localhost:3000/seller_profile/${seller_id}`)
      .then((response) => {
        const responseData = response.data;
  
        // Make sure keys in formData match keys in responseData exactly
        setFormData({
          name: responseData.name,
          email: responseData.email,
          mobileNumber: responseData.mobileNumber,
          area: responseData.area,
          district: responseData.district,
          division: responseData.division,
          password: responseData.password,
          // Add other fields as needed
        });
        console.log(formData);
        // Do not expect formData to be updated immediately, as it's asynchronous
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
  
  
  return (
    
    <div className={styles.buyerProfileDropdown}>
      <button className={styles.b}onClick={closemodel}>X</button>
      <div className={styles.border} />
      <Link to={`/buyer_profile`} className={styles.header}>
        <img className={styles.pictureIcon} alt="" src="./images/picture.svg" />
        </Link>
        <div className={styles.name}>{formData.name}</div>
        <div className={styles.welcome}>
          Welcome to the world of passionate craft enthusiasts – let's embark on
          a journey of discovering your unique preferences in crafts
        </div>
      
      <button className={styles.cart}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconShoppingBag}
          alt=""
          src="./images/-icon-shoppingbag.svg"
        />
        <div className={styles.myCart}>My Cart</div>
      </button>
      <button className={styles.wishlist}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconActionHeartLoveLikeR}
          alt=""
          src="./images/-icon-action-heart-love-like-romantic-icon.svg"
        />
        <div className={styles.wishlist1}><Link to={`/Wishlist`}>Wishlist</Link></div>
      </button>
      
      <button className={styles.chat}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconCommunicationBubbleTex}
          alt=""
          src="./images/-icon-communication-bubble-texting-chat-comment-talk-speech-icon.svg"
        />
        <div className={styles.messages}>Messages</div>
      </button>
      <button className={styles.notification}>
        <div className={styles.cartChild} />
        <img className={styles.iconBell} alt="" src="./images/-icon-bell.svg" />
        <div className={styles.notification1}>Notification</div>
      </button>
      <button className={styles.myOrders}>
        <div className={styles.myOrdersChild} />
        <img
          className={styles.iconNavIconListA}
          alt=""
          src="./images/-icon-nav-icon-list-a.svg"
        />
        <div className={styles.myOrders1}>My Orders</div>
      </button>
      <button className={styles.track}>
        <div className={styles.trackChild} />
        <img className={styles.iconZoomPan} alt="" src="./images/-icon-zoom-pan.svg" />
        <div className={styles.trackingOrders}>Tracking Orders</div>
      </button>
      <button className={styles.community}>
        <div className={styles.myOrdersChild} />
        <img
          className={styles.iconPeopleCommunity}
          alt=""
          src="./images/-icon-people-community.svg"
        />
        <div className={styles.goToCraft}>Go to Craft Community</div>
      </button>
      <button className={styles.signOut}>
        <div className={styles.trackChild} />
        <img className={styles.iconLogout} alt="" src="./images/-icon-logout.svg" />
        <div className={styles.signOut1}>Sign Out</div>
      </button>
    </div>
    
  );
};

export default ProfileBox;
