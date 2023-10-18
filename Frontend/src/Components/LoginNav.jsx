// import React from "react";
import { useState, useEffect, useRef } from 'react';
import Style from "./Navbar_seller.module.css";
import axios from "axios";
// import Button from './Button.jsx';
// import { Link } from "react-router-dom";
import ProfileBox from '../ProfileBox';

const Navbar = () =>{

    const [data, setData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sellerId = sessionStorage.getItem("seller_id");
    const overlayRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/seller_profile/${sellerId}`)
      .then((response) => {
        console.log(response.data._id)
        setData(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sellerId]);

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

  const [isProductMenuOpen, setProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setProductMenuOpen(!isProductMenuOpen);
  };

    
    return (

        <>
        <div className={Style.navbar}> {/* Use CSS module class name */}
            <div className={Style.upper}>
                <div className={Style.left}>
                    <h4 style={{ margin: '1px' }}></h4>
                </div>
                <div className={Style.right}>
                {/* <div className={Style.profile}> */}
                    <button className={Style.picture} onClick={toggleModal}>
                        <i class="fas fa-user"></i>
                        <p>{data.name}</p>
                    </button>
                    {/* <div className={Style.profile}>
                        <img src="./images/icons8-male-user-50.png" alt="" onClick={openmodel} />
                        </div> */}
                    <div className={Style.icons}>
                        <i className="fa-regular fa-bell"></i>
                        <p>Notifications</p>
                    </div>
                    <div className={Style.icons}>
                        <i className="fa-solid fa-cart-plus"></i>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
            <div className={Style.lower}>
                <div className={Style.left}>
                    <a href="/"><img src="./images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></a>
                </div>
                <div className={Style.middle}>
                    <nav className={Style.navbar}>
                    <ul className={Style['nav-list']}>
                        <li className={Style['nav-item']}>Home</li>
                        <li className={Style['nav-item']} onMouseEnter={toggleProductMenu} onMouseLeave={toggleProductMenu}>
                        Product
                        {isProductMenuOpen && (
                        <ul className={Style['dropdown-menu']}>
                        <li className={Style['dropdown-item']}>View Product</li>
                        <li className={Style['dropdown-item']}>Add Product</li>
                        <li className={Style['dropdown-item']}>About Craft</li>
                        </ul>
                        )}
                        </li>
                        <li className={Style['nav-item']}>Community</li>
                        <li className={Style['nav-item']}>Orderlist</li>
                    </ul>
                    </nav>
                </div>
                <div className={Style.right}>
                    <input type="text" className={Style.search} placeholder="Search..." />
                    <i className="fa fa-search icon"></i>
                </div>
            </div>
        </div>

        {isModalOpen && (
                <div className={Style.overlay} onClick={handleOverlayClick} ref={overlayRef}>
                 <ProfileBox />
                </div>
            )}
        </>

        



        
    );
}
export default Navbar;