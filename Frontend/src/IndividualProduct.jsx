import React from "react";
import style from "./IndividualProduct.module.css"
import nakshikathaImage from './assets/nakshi_katha(1).jpg'
import Button from "./Components/Button";


export default function IndividualProduct() {
    return (
        <div className={style.container}>
            <div>navbar</div>
            <div className={style['product-wrapper']}>
                <div className={style.product}>
                    <div className={style['product-picture']}>
                        <div className={style['one-picture']}>
                            <img src={nakshikathaImage} alt="" />
                        </div>
                        {/* <div className={style['more-pictures']}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div> */}
                    </div>
                    <div className={style['product-info']}>
                        <div className={style['basic-info']}>
                            <h1>Product Name</h1>
                            <p>Location</p>
                            <div className={style['seller-info']}>
                                <p>Seller</p>
                                <a href="#">Chat with seller</a>
                            </div>
                            <p>Review</p>
                            <p>Price</p>
                            <p>Discount price</p>
                            <Button text="Wishlist" />
                        </div>
                        <div className={style['buttons-link']}>
                            <div className={style.buttons}>
                                <div className={style.quantity}>
                                    <button className={style['cart-button']}>-</button>
                                    {/* <Button text="-" /> */}
                                    <p>1</p>
                                    {/* <Button text="+" /> */}
                                    <button className={style['cart-button']}>+</button>
                                </div>
                                <Button text="Add to cart" />
                            </div>
                            <a href="#">To learn more about this handicraft</a>
                        </div>
                    </div>
                </div>
                <div className={style['product-description']}>
                    <h2>Description</h2>
                    <div className={style.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque ipsa doloribus mollitia illo libero aspernatur tenetur provident adipisci optio corrupti laudantium ducimus voluptate distinctio delectus deleniti hic, beatae eveniet.
                    </div>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    );
}