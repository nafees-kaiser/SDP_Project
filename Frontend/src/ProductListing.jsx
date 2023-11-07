import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./ProductListing.module.css"
import nakshiKathaImage from '../images/nakshi_katha(1).jpg'
import Card from "./Components/Card";
import Navbar from './Components/Navbar';
import CraftForm from "./Components/CraftForm";
import { Link } from "react-router-dom";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Division from "./Classes/divisionDistrict";


export default function ProductListing() {
    //For storing the products from database
    const [productCount, setCount] = useState(0)
    const [products, setProducts] = useState([])
    // For collapsible menu in filtering
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isLocationOpen, setLocationOpen] = useState(false);
    const [isRatingOpen, setRatingOpen] = useState(false);
    // const [isSizeOpen, setSizeOpen] = useState(false);
    const [isPriceOpen, setPriceOpen] = useState(false);
    // For location dropdown
    const [divisionValue, setDivisionValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');

    const buyerId = sessionStorage.getItem("buyer_id");

    const toggleCategory = () => {
        setCategoryOpen(!isCategoryOpen);
    }
    const toggleLocation = () => {
        setLocationOpen(!isLocationOpen);
    }
    const toggleRating = () => {
        setRatingOpen(!isRatingOpen);
    }
    // const toggleSize = () => {
    //     setSizeOpen(!isSizeOpen);
    // }
    const togglePrice = () => {
        setPriceOpen(!isPriceOpen);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/product-listing')
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
                setCount(response.data.length);
                console.log("from product:" + sessionStorage.getItem("uid"));
            })
    }, [])
    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
            <div className={style.container}>
                <div className={style['hero-section']}>
                    <h1>Handicraft Products</h1>
                    <p>Buy the traditional handicraft items from various categories.</p>
                </div>
                <div className={style['filter-and-products']}>

                    <div className={style['filter']}>
                        <p className={style['filter-heading']}>Filter</p>
                        <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleCategory}>{isCategoryOpen ? '˅ Categories' : '> Categories'}</div>
                        {isCategoryOpen &&

                            <ul className={style['categories-list']}>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="clothing" id="clothing" /> Clothing</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="shoes" id="shoes" /> Shoes</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="accessories" id="accessories" /> Accessories</label></li>
                            </ul>
                        }
                        <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleLocation}>{isLocationOpen ? '˅ Location' : '> Location'}</div>
                        {isLocationOpen &&
                            <>
                                <select onChange={(e) => setDivisionValue(e.target.value)} value={divisionValue}>
                                    <option value="">Select a division</option>
                                    {Division.getDivision()?.map(div => {
                                        return <option value={div}>{div}</option>
                                    })}
                                </select>
                                <select value={districtValue} onChange={(e) => setDistrictValue(e.target.value)}>
                                    <option value="">Select a district</option>
                                    {Division.getDistrict(divisionValue)?.map((dist) => {
                                        return <option value={dist}>{dist}</option>
                                    })}
                                </select>
                            </>
                        }
                        <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleRating}>{isRatingOpen ? '˅ Rating' : '> Rating'}</div>
                        {isRatingOpen &&
                            <ul className={style['categories-list']}>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="clothing" id="clothing" /> 5 star</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="shoes" id="shoes" /> 4 star</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="accessories" id="accessories" /> 3 star</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="accessories" id="accessories" /> 2 star</label></li>
                                <li><label style={{ cursor: "pointer" }}><input type="checkbox" name="accessories" id="accessories" /> 1 star</label></li>
                            </ul>

                        }
                        <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={togglePrice}>{isPriceOpen ? '˅ Price Range' : '> Price Range'}</div>
                        {isPriceOpen &&
                            <>
                                <input type="text" placeholder="Min" />
                                <input type="text" placeholder="Max" />
                            </>
                        }
                        <Button
                            text="Apply"
                        />
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
                                    <Link to={`/product-listing/${_id}`} key={_id}>
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
                        <Button text="Load more" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}