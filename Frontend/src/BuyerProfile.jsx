import { useState, useEffect } from 'react';
// import { useCallback } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import CraftForm from "./Components/CraftForm.jsx"
import Form from "./Components/Form";
import styles from "./BuyerProfile.module.css";

const BuyerProfile = () => {

  
  const [data, setData] = useState({});
  const buyerId = sessionStorage.getItem("buyer_id");

  useEffect(() => {
    axios.get(`http://localhost:3000/buyer_profile/${buyerId}`)
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [buyerId]);


  return (

    <>
    <CraftForm />
    <div className={styles.buyerProfile}>
      
      <div className={styles.border} />
      
      <div className={styles.border1} />
      <div className={styles.pageHeader}>
          <div className={styles.pageTitle}>
            <h1
            style={
              {fontSize: '2em'}
            }
            >
            Your Profile</h1>
          </div>
      </div>

      <Form />
      
      <div className={styles.pictureName}>
        <input
          className={styles.name}
          value={data.email}
          type="email"
        />
        <img
          className={styles.picture}
          alt=""
          src="./images/ellipse-909@2x.png"
        />
        <button className={styles.pictureNameInner}> + Change photo</button>
      </div>
      
      
    </div>
    <Footer />
    </>
    
  );
};

export default BuyerProfile;
