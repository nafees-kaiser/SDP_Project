import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./KnowTheCraft.module.css"
import nakshiKathaImage from '../images/nakshi_katha(1).jpg'
import Card from "./Components/Card";
import Navbar from './Components/Navbar'
import { Link } from "react-router-dom";
import Button from "./Components/Button";
import Footer from "./Components/Footer";


export default function KnowTheCraft() {
    const [productCount, setCount] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/product-listing')
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
                setCount(response.data.length);
            })
    }, [])
    return (
        <>
            <Navbar />
            <div className={style.container}>
                {/* <div>navbar</div> */}
                <div className={style['hero-section']}>
                    <div className={style['hero-heading']}><h1>Find the traditional art and crafts of different districts in Bangladesh</h1></div>
                    {/* <p>Buy the traditional handicraft items from various categories.</p> */}
                    <div className={style['hero-search']}>
                        <input type="text" placeholder="Search by district or name of the product" />
                        <button className={style.button}>
                            <i className="fa-solid fa-magnifying-glass fa-lg" style={{color: "#ffffff",}}></i>
                        </button>
                    </div>
                </div>
                <div className={style['product-list']}>
                    <div className={style['sort-and-filter']}>
                        <p>Faridpur</p>
                        <p>{`${productCount} Products`}</p>
                        {/* <button>Filter</button>
                        <button>Sort by</button> */}
                    </div>
                    <div className={style['product-cards']}>
                        {products.map((product, index) => {
                            const { _id, productName, district, division, price } = product;
                            return (
                                <Link to={`/individual-product/${_id}`} key={_id}>
                                    <Card
                                        image={nakshiKathaImage}
                                        review="5 star"
                                        productName={productName}
                                        location={`${district}, ${division}`}
                                        price={`${price} Tk`}
                                    />
                                </Link>
                            );
                        })}

                    </div>
                    {productCount > 12 && <Button text="Load more" />}

                </div>
            </div>
            <Footer />
        </>
    );
}