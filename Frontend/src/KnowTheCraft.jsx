import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import style from "./KnowTheCraft.module.css"
import { KnowCraftCard } from "./Components/Card";
import Navbar from './Components/Navbar'
import CraftForm from "./Components/CraftForm";
import { Link } from "react-router-dom";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Division from "./Classes/divisionDistrict";


export default function KnowTheCraft() {
    const [productCount, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const buyerId = sessionStorage.getItem("buyer_id");

    const [divisionValue, setDivisionValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/know-the-craft')
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
                setCount(response.data.length);
            })
    }, [])
    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
            <div className={style.container}>
                {/* <div>navbar</div> */}
                <div className={style['hero-section']}>
                    <div className={style['hero-heading']}><h1>Find the traditional art and crafts of different districts in Bangladesh</h1></div>
                    {/* <p>Buy the traditional handicraft items from various categories.</p> */}
                    <div className={style['hero-search']}>
                        <input style={{color: "black"}} type="text" placeholder="Search by district or name of the product" value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        />
                        <button className={style.button}>
                            <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: "#ffffff", }}></i>
                        </button>
                    </div>
                </div>
                {/* <div className={style['division-button']}>
                    {Division.getDivision().map((div,index)=>{
                       return <button className={style.button} key={index}>{div}</button>
                    })}
                </div> */}
                <div className={style['filter-and-products']}>
                    <div className={style['filter']}>
                        <p className={style['filter-heading']}>Filter</p>
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

                    </div>
                    <div className={style['product-list']}>
                        <div style={{
                            fontSize: "2em",
                            fontWeight: "700",
                            width: "100%"
                        }}>
                            Dhaka
                        </div>
                        <div className={style['sort-and-filter']}>
                            <p style={{ fontWeight: "700" }}>Faridpur</p>
                            <p>{`${productCount} Crafts`}</p>
                            {/* <button>Filter</button>
                            <button>Sort by</button> */}
                        </div>
                        <div className={style['product-cards']}>
                            {products.map((product, index) => {
                                const { _id, Artisan_Title, Hero_img, Artisan_Description } = product;
                                return (
                                    <Link to={`/know-the-craft/${_id}`} key={_id}>
                                        <KnowCraftCard
                                            image={Hero_img}
                                            title={Artisan_Title}
                                            desc={Artisan_Description}
                                        // rating={4}
                                        // productName={productName}
                                        // location={`${district}, ${division}`}
                                        // price={`${price} Tk`}
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