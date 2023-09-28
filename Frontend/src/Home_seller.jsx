import React from "react";
import Style from './Home_seller.module.css';
import Navbar from "./Components/Navbar_seller";

const Home_seller = ()=>{
    return (
        <>
            <Navbar/>
            <div className={Style.line}></div>
            <div className={Style.header}>
                <div className={Style.left}>
                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Total Customers</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>5648</p>
                        <div className={Style.first}>
                            <p>+23%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    
                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Sales Today</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>7916</p>
                        <div className={Style.first}>
                            <p>+21%</p>
                            <p>Since last month</p>
                        </div>
                    </div>

                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Monthly Sales</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>59525</p>
                        <div className={Style.first}>
                            <p>+5%</p>
                            <p>Since last month</p>
                        </div>
                    </div>

                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Yearly Sales</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>65152</p>
                        <div className={Style.first}>
                            <p>+43%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    
                </div>
                <div className={Style.right}></div>
            </div>
            <div className={Style.line}></div>
            <div className={Style.middle}></div>
        </>
    );
}
export default Home_seller;