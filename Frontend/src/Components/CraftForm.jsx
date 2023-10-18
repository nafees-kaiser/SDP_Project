// import React from "react";
import { useState, useEffect, useRef } from 'react';
import Style from "./CraftsForm.module.css";
import axios from "axios";
// import Button from './Button.jsx';
import { Link } from "react-router-dom";
import BuyerProfileBox from '../BuyerProfileBox';

const Navbar = () =>{

    const [data, setData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buyerId = sessionStorage.getItem("buyer_id");
    const overlayRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/buyer_profile/${buyerId}`)
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [buyerId]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    if (!isModalOpen) {
        document.body.style.overflow = 'auto';
      }
    // document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      toggleModal();
    }
  };

    
    return (

        <>
            <div className={Style.navbar}>
                <div className={Style.upper}>
                    <div className={Style.left}>
                        <Link to={`/become_seller`} className={Style.link}>Become a Seller</Link>
                    </div>
                    <div className={Style.right}>
                    {/* <Link to={`/login`} className={Style.link}> Login</Link> */}
                        {/* <Button text="Logged in"/> */}
                        <button className={Style.icons} onClick={toggleModal}>
                            <i class="fas fa-user"></i>
                            <p>{data.name}</p>
                        </button>
                        <button className={Style.icons}>
                            <i class="fa-regular fa-bell"></i>
                            <p>Notifications</p>
                        </button>
                        <div className={Style.icons}>
                            <i class="fa-solid fa-cart-plus"></i>
                            <p>Cart</p>
                        </div>

                    </div>
                </div>
                <div className={Style.lower}>
                    <div className={Style.left}>
                    <Link to={`/product-listing`}><img src="/images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></Link>
                    </div>
                    <div className={Style.middle}>
                        <Link to={`/`} className={Style.link}> Home</Link>
                        <Link to={`/product-listing`} className={Style.link}> Product</Link>
                        {/* <button onClick={scrollToCommunity}>Community</button> */}
                        {/* <button className={Style.link} onClick="document.getElementById('middle').scrollIntoView();"> Community</button> */}
                        {/*<Link to={`/community`} className={Style.link}> Community</Link>*/}
                        <a href="#">Community</a>
                        <a href="#">Know about craft</a>
                    </div>
                    <div className={Style.right}>
                        <input type="text" className={Style.search} placeholder="Search..."></input>
                        <i class="fa fa-search icon"></i>   
                    </div> 
                </div>
            </div>
            {isModalOpen && (
                <div className={Style.overlay} onClick={handleOverlayClick} ref={overlayRef}>
                 <BuyerProfileBox />
                </div>
            )}

            {/* {isModalOpen && (
                <div className={Style.overlay} onClick={toggleModal}>
                    <BuyerProfileBox closemodel={toggleModal} />
                    <BuyerProfileBox />
                </div>
             
            )} */}
        </>
    );
}
export default Navbar;