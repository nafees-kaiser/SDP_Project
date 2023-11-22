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
import { useDispatch, useSelector } from 'react-redux';
import Notification from "./Notification.jsx";

export default function KnowTheCraft() {
    const [productCount, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const buyerId = sessionStorage.getItem("buyer_id");
    const notification = useSelector(state => state.toggle)
    const [divisionValue, setDivisionValue] = useState('');
    // const [districtValue, setDistrictValue] = useState('');

    const [isDistrictOpen, toggleDistrict] = useState(false);
    const [districtCheckbox, setDistrictCheckbox] = useState([]);
    const [districtValue, setDistrict] = useState([]);
    useEffect(()=>{
        
        setDistrictCheckbox(new Array(Division.getDistrict(divisionValue).length).fill(false));
        setDistrict([]);
    },[divisionValue])

    const filtering = ()=>{
        axios.get(`http://localhost:3000/know-the-craft?division=${divisionValue}&district=${districtValue}`)
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
                setCount(response.data.length);
            })
    }

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
            {notification.toggle && <Notification />}
            <div className={style.container}>
                {/* <div>navbar</div> */}
                <div className={style['hero-section']}>
                    <div className={style['hero-heading']}><h1>Find the traditional art and crafts of different districts in Bangladesh</h1></div>
                    {/* <p>Buy the traditional handicraft items from various categories.</p> */}
                    <div className={style['hero-search']}>
                        <input style={{ color: "black" }} type="text" placeholder="Search by district or name of the product" value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
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
                        <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={() => toggleDistrict(!isDistrictOpen)}>
                            {isDistrictOpen ?
                                <div>
                                    <img src="/images/down.svg" alt="down" style={{ display: "inline" }} />
                                    <div style={{ display: "inline" }}>District</div>
                                </div>
                                : <div>
                                    <img src="/images/right.svg" alt="down" style={{ display: "inline" }} />
                                    <div style={{ display: "inline" }}>District</div>
                                </div>}
                        </div>
                        {isDistrictOpen &&

                            <ul className={style['categories-list']}>
                                {Division.getDistrict(divisionValue)?.map((dist, index) => {
                                    const styling = {
                                        cursor: "pointer",
                                        gap: "5px",
                                        margin: "5px 0px"
                                    }
                                    return <li key={index}>
                                        <label style={styling}>
                                            <input type="checkbox" checked={districtCheckbox[index]} onChange={() => {
                                                const updatedCheckbox = [...districtCheckbox];
                                                updatedCheckbox[index] = !districtCheckbox[index];
                                                setDistrictCheckbox(updatedCheckbox);
                                                // console.log(updatedCheckbox);

                                                if(updatedCheckbox[index]){
                                                    setDistrict(prev=>[...prev, dist]);
                                                } else{
                                                    setDistrict(prev=> prev.filter(prevDis=> prevDis !== dist));
                                                }

                                                // console.log(districtValue);

                                            }} />
                                            {'  ' + dist}
                                        </label>
                                    </li>
                                })}
                            </ul>
                        }
                        {/* <select value={districtValue} onChange={(e) => setDistrictValue(e.target.value)}>
                            <option value="">Select a district</option>
                            {Division.getDistrict(divisionValue)?.map((dist) => {
                                return <option value={dist}>{dist}</option>
                            })}
                        </select> */}
                         <Button
                            text="Apply"
                            change={filtering}
                        />
                    </div>
                    <div className={style['product-list']}>
                        {/* <div style={{
                            fontSize: "2em",
                            fontWeight: "700",
                            width: "100%"
                        }}>
                            Dhaka
                        </div> */}
                        <div className={style['sort-and-filter']}>
                            {/* <p style={{ fontWeight: "700" }}>Faridpur</p> */}
                            <p>{`${productCount} Crafts`}</p>
                            {/* <button>Filter</button>
                            <button>Sort by</button> */}
                        </div>
                        <div className={style['product-cards']}>
                            {products.map((product, index) => {
                                const { _id, Artisan_Title, Hero_img, Artisan_Description, Product_Division, Product_District } = product;
                                return (
                                    <Link to={`/know-the-craft/${_id}`} key={_id}>
                                        <KnowCraftCard
                                            image={Hero_img}
                                            title={Artisan_Title}
                                            desc={Artisan_Description}
                                            location={`${Product_District}, ${Product_Division}`}
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