// import React, {useRef} from "react";
import {useState, useEffect} from "react";
import styles from "./ProfileBox.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfileBox = (props) => {

  const [data, setData] = useState({});
  const [messagebox,setmessagebox] = useState(false);
  const sellerId = sessionStorage.getItem("seller_id");
  const navigate = useNavigate();
  const callbackmessage = () => {
    setmessagebox(true);
    props.callback(true)
  }
  useEffect(() => {
    axios.get(`http://localhost:3000/seller_profile/${sellerId}`)
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sellerId]);

  const handleChange = ()=>{
      navigate('/AddAProductPage');
  }

  const handleChange2 = ()=>{
    navigate('/sellerProductListing');
}
const handleChange3 = ()=>{
  navigate('/Order_Seller_List');
}

  const handleSignOut = () => {
    // Clear sessionStorage when the "Sign Out" button is clicked
    sessionStorage.clear();
    // navigate('/become_seller');
    navigate('/');
  };

  return (
    
    <div className={styles.buyerProfileDropdown}>
      {/* <button className={styles.b}onClick={closemodel}>X</button> */}
      <div className={styles.border} />
      <Link to={`/seller_profile`} className={styles.header}>
        <img className={styles.pictureIcon} alt="" src={data.img} />
        </Link>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.welcome}>
        Welcome to the realm of dedicated artisans – together, we'll uncover
        the distinctive charm of your craft creations
        </div>
      
      <button className={styles.cart} onClick={handleChange}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconShoppingBag}
          alt=""
          src="./images/-icon-add-circled-outline.svg"
        />
        <div className={styles.myCart}>Add Products</div>
      </button>
      <button className={styles.wishlist} onClick={handleChange2}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconActionHeartLoveLikeR}
          alt=""
          src="./images/-icon-products.svg"
        />
        <div className={styles.wishlist1}>My Products</div>
      </button>
      
      <button className={styles.chat}>
        <div className={styles.cartChild} />
        <img
          className={styles.iconCommunicationBubbleTex}
          alt=""
          src="./images/-icon-communication-bubble-texting-chat-comment-talk-speech-icon.svg"
        />
        <div className={styles.messages} onClick={callbackmessage}>Messages</div>
      </button>
      <button className={styles.notification} onClick={handleChange3}>
        <div className={styles.cartChild} />
        <img className={styles.iconBell} alt="" src="./images/-icon-clipboard-list.svg" />
        <div className={styles.notification1}>My Orders</div>
      </button>
      <button className={styles.myOrders}>
        <div className={styles.myOrdersChild} />
        <img
          className={styles.iconNavIconListA}
          alt=""
          src="./images/-icon-bell.svg"
        />
        <div className={styles.myOrders1}>Notification</div>
      </button>
      {/* <button className={styles.track}>
        <div className={styles.trackChild} />
        <img className={styles.iconZoomPan} alt="" src="./images/-icon-zoom-pan.svg" />
        <div className={styles.trackingOrders}>Tracking Orders</div>
      </button> */}
      <button className={styles.track}>
        <div className={styles.trackChild} />
        <img
          className={styles.iconPeopleCommunity}
          alt=""
          src="./images/-icon-people-community.svg"
        />
        <div className={styles.trackingOrders}>Go to Craft Community</div>
      </button>
      <button className={styles.community} onClick={handleSignOut}>
        <div className={styles.myOrdersChild} />
        <img className={styles.iconPeopleCommunity} alt="" src="./images/-icon-logout.svg" />
        <div className={styles.goToCraft}>Sign Out</div>
      </button>
    </div>
    
  );
};

export default ProfileBox;
