import React from "react";
import Style from "./Navbar.module.css";
// import Button from './Components/Button.jsx';
import Button from "./Button";

const Navbar = ()=>{
    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.upper}>
                    <div className={Style.left}>
                        <h4 style={{margin:'1px'}}>Become a Seller</h4>
                    </div>
                    <div className={Style.right}>
                        <Button text="Log in"/>
                        <div className={Style.icons}>
                            <i class="fa-regular fa-bell"></i>
                            <p>Notifications</p>
                        </div>
                        <div className={Style.icons}>
                            <i class="fa-solid fa-cart-plus"></i>
                            <p>Cart</p>
                        </div>

                    </div>
                </div>
                <div className={Style.lower}>
                    <div className={Style.left}>
                        <a href="/"><img src="./images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></a>
                    </div>
                    <div className={Style.middle}>
                        <p>Home</p>
                        <p>Product</p>
                        <p>Community</p>
                        <p>Know about craft</p>
                    </div>
                    <div className={Style.right}>
                        <input type="text" className={Style.search} placeholder="Search..."></input>
                        <i class="fa fa-search icon"></i>   
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Navbar;