import React, { useState,useEffect } from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [showNotification, setShowNotification] = useState(false);
    const buyerId = sessionStorage.getItem("buyer_id");
    const [Notifications, setNotification] = useState([]);

    const toggleNotification = () => {
        setShowNotification(!showNotification);

    };

    useEffect(() => {
        console.log(buyerId);
        axios.get(`http://localhost:3000/get/notifications/${buyerId}`)
            .then((response) => {
                console.log(response.data);
                if(response.data.notifications != 0)
                {
                    setNotification(response.data.notifications);
                }
                else
                {
                    const data = {
                        notifications: [
                          {
                            notificationDescription: 'No Notification',
                          }
                        ],
                      };                    
                    setNotification(data.notifications);
                }
            })
    }, [])


    const clearNotification = async () => {
        axios.delete(`http://localhost:3000/delete/notifications/${buyerId}`)
            .then((response) => {
                window.location.reload();
            })
    }
  

  return (
    <>
      <div className={Style.navbar}>
        <div className={Style.upper}>
          <div className={Style.left}>
            <Link to={`/become_seller`} className={Style.link}>
              Become a Seller
            </Link>
          </div>
          <div className={Style.right}>
            <Link to={`/login`} className={Style.link}>
              Login
            </Link>
            &ensp;
            
            <div onClick={toggleNotification}>
            <button class="text-white">Notifications</button>
            </div>
            {showNotification && (
                <div className={Style.notificationContainer}>
                    {Notifications.map((notification) => (
                        <div id="toast-warning" class="flex items-center w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                                </svg>
                                <span class="sr-only">Warning icon</span>
                            </div>
                            <div class="ml-3 text-sm font-normal">{notification.notificationDescription}</div>   
                        </div>
                    ))
                    }
                    <button onClick={clearNotification} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Clear Notification</button>
                </div>

            )}
            <div className={Style.icons}>
              <i className="fa-solid fa-cart-plus"></i>
              <p>Cart</p>
            </div>
          </div>
        </div>
      
        <div className={Style.lower}>
          <div className={Style.left}>
            <Link to={`/product-listing`}>
              <img
                src="/images/384165997_332969559130939_1111385360839973004_n.png"
                alt=""
              />
            </Link>
          </div>
          <div className={Style.middle}>
            <Link to={`/`} className={Style.link}>
              Home
            </Link>
            <Link to={`/product-listing`} className={Style.link}>
              Product
            </Link>
            <a href="#com">Community</a>
            <a href="#craft">Know about craft</a>
          </div>
          <div className={Style.right}>
            <input type="text" className={Style.search} placeholder="Search..." />
            <i className="fa fa-search icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
