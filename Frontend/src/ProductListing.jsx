import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./ProductListing.module.css"
import nakshiKathaImage from '../images/nakshi_katha(1).jpg'
import Card from "./Components/Card";
import Navbar from './Components/Navbar'
import { Link } from "react-router-dom";
import Button from "./Components/Button";


export default function ProductListing() {
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
            <Navbar/>
            <div className={style.container}>
                {/* <div>navbar</div> */}
                <div className={style['hero-section']}>
                    <h1>Handicraft Products</h1>
                    <p>Buy the traditional handicraft items from various categories.</p>
                </div>
                <div className={style['product-list']}>
                    <div className={style['sort-and-filter']}>
                        <p>{`${productCount} Products`}</p>
                        {/* <button>Filter</button>
                        <button>Sort by</button> */}
                    </div>
                    <div className={style['product-cards']}>
                        {products.map((product, index) => {
                            const { _id, productName, district, division, price } = product;
                            return (
                                <Link to={`/individual-product/${_id}`} key={index}>
                                    {/* <a href="#" key={index}> */}
                                    <Card
                                        image={nakshiKathaImage}
                                        review="5 star"
                                        productName={productName}
                                        location={`${district}, ${division}`}
                                        price={`${price} Tk`}
                                    />
                                    {/* </a> */}
                                </Link>
                            );
                        })}
                        {/* <a href="#">
                        <Card
                            image={nakshiKathaImage}
                            review="5 star"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                            </a>
                            <a href="#">
                            <Card
                            image={nakshiKathaImage}
                            review="review"
                            productName="Nakshi Katha"
                            location="Faridpur, Dhaka"
                            price="220 Tk"
                            />
                        </a> */}

                    </div>
                    {/* <button className={style.button}>Load more</button> */}
                    <Button text="Load more"/>
                </div>
                <footer>
                    footer
                </footer>
            </div>
        </>
    );
}