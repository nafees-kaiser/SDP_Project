import React from "react";
import style from "./IndividualProduct.module.css"


export default function IndividualProduct() {
    return (
        <>
            <div>navbar</div>

            <div className={style.product}>
                <div className={style['product-picture']}>
                    <div className={style['one-picture']}>
                        <img src="" alt="" />
                    </div>
                    <div className={style['more-pictures']}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={style['product-info']}>
                    <div className={style['basic-info']}>
                        <h1>Product Name</h1>
                        <p>Location</p>
                        <p>Seller</p>
                        <a href="#">Chat with seller</a>
                        <p>Review</p>
                        <p>Price</p>
                        <p>Discount price</p>
                        <button>Wishlist</button>
                    </div>
                    <div className={style.quantity}>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <button>Add to cart</button>
                    <a href="#">To learn more about this handicraft</a>
                </div>
            </div>
            <div className={style['product-description']}>
                <h2>Description</h2>
                <div className={style.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque ipsa doloribus mollitia illo libero aspernatur tenetur provident adipisci optio corrupti laudantium ducimus voluptate distinctio delectus deleniti hic, beatae eveniet.
                </div>
            </div>

            <footer>

            </footer>
        </>
    );
}