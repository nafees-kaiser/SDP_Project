import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import style from "./IndividualProduct.module.css"
import nakshikathaImage from '../images/nakshi_katha(1).jpg'
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function IndividualProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [amount, setAmount] = useState(0)
    const navigate = useNavigate();
    const routeChange = () => {
        if (product) {
            const obj = JSON.stringify({ product, amount })
            navigate(`/checkout/${obj}`);
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/individual-product/${id}`)
            .then((response) => {
                // console.log(response.data);
                setProduct(response.data);
            })
    }, []);

    const decrease = () => {
        if (amount) {
            setAmount(amount - 1)
        }
        else {
            setAmount(0)
        }
    }
    const increase = () => {
        setAmount(amount + 1)
    }

    const { productName, district, division, price, seller, description } = product
    return (
        <>
            <Navbar/>
            <div className={style.container}>
                {/* <div>navbar</div> */}
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

                                <h1>{productName}</h1>
                                <p>{`${district}, ${division}`}</p>
                                <div className={style['seller-info']}>
                                    <p>{seller}</p>
                                    <a href="#">Chat with seller</a>
                                </div>
                                <p>5 star</p>
                                <p>{price}</p>
                                <p></p>
                                <Button text="Wishlist" />
                            </div>
                            <div className={style['buttons-link']}>
                                <div className={style.buttons}>
                                    <div className={style.quantity}>
                                        <button className={style['cart-button']} onClick={decrease}>-</button>
                                        {/* <Button text="-" /> */}
                                        <p>{amount}</p>
                                        {/* <Button text="+" /> */}
                                        <button className={style['cart-button']} onClick={increase}>+</button>
                                    </div>
                                    <Button text="Add to cart" change={routeChange} />
                                </div>
                                <a href="#">To learn more about this handicraft</a>
                            </div>
                        </div>
                    </div>
                    <div className={style['product-description']}>
                        <h2>Description</h2>
                        <div className={style.description}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}