import React from "react";
import style from "./Add_Know.module.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Input_box from "./Components/Input_box";

const Add_Know = ()=>{
    return (
        <>  
            <Navbar/>
            <div className={style.top}>
                <h1>Add your Artistry Product</h1>
                <p>Here you can add artistry by District</p>
            </div>
            <div className={style.main}>
                <div className={style.left}>
                    <div className={style.text}>
                        <h3>PRODUCT DETAILS</h3>
                        <p>Add product details from here</p>
                    </div>
                    <div className={style.form}>
                        <Input_box name="Product Type" placeholder="i.e Handmade Craft"/>
                        <Input_box name="Product Division" placeholder="i.e Dhaka"/>
                        <Input_box name="Product District" placeholder="i.e Gazipur"/>
                        <Input_box name="Artisan Title" placeholder="Write here"/>
                        <div className={style.type}>
                            <p>Artisan Description<span>*</span></p>
                            <textarea 
                                placeholder=" Write here" 
                                className={style.resize}
                            />
                        </div>
                        <div className={style.type}>
                            <p>Artisan History<span>*</span></p>
                            <textarea 
                                placeholder=" Write here" 
                                className={style.resize}
                            />
                        </div>
                        <div className={style.type}>
                            <p>How it is made</p>
                            <textarea 
                                placeholder=" Write here" 
                                className={style.resize}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.text}>
                        <h3>PRODUCT IMAGE</h3>
                        <p>Here you upload images of product.You are allowed to upload atleast 3 images for a product</p>
                    </div>
                    <div className={style.image}>
                        <div className={style.upper}>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        
        </>
    )
}
export default Add_Know;