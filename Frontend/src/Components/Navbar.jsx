import React from "react";
import Style from "./Navbar.module.css";
import Button from './Button.jsx';
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.upper}>
                    <div className={Style.left}>
                        <Link to={`/become_seller`} className={Style.link}>Become a Seller</Link>
                    </div>
                    <div className={Style.right}>
                        <Button text="Log in"/>
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
                    <Link to={`/product-listing`}><img src="/images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></Link>
                    </div>
                    <div className={Style.middle}>
                        <a href="#">Home</a>
                        <Link to={`/product-listing`} className={Style.link}> Product</Link>
                        <a href="#">Community</a>
                        <a href="#">Know about craft</a>
                    </div>
                    <div className={Style.right}>
                        <input type="text" className={Style.search} placeholder="Search..."></input>
                        <i className="fa fa-search icon"></i>   
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Navbar;