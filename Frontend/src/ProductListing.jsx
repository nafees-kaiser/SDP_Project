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
import { ShowStar } from "./Components/RatingStars";
import Messaging from "./Messaging_buyer";
import { useDispatch, useSelector } from 'react-redux';
import Notification from "./Notification.jsx";

export default function ProductListing() {
    const [messageset, setmessagesetter] = useState(false);
    //For storing the products from database
    const [productCount, setCount] = useState(0)
    const [products, setProducts] = useState([])
    // For collapsible menu in filtering
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isLocationOpen, setLocationOpen] = useState(false);
    const [isRatingOpen, setRatingOpen] = useState(false);
    const [isPriceOpen, setPriceOpen] = useState(false);
    // For location dropdown
    const [divisionValue, setDivisionValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');

    const notification = useSelector(state => state.toggle);

    // For selecting category
    const [selectedCategory, setCategory] = useState([]);
    const [selectedRating, setRating] = useState([]);
    // Collapsible menu toggle functions 
    const toggleCategory = () => {
        setCategoryOpen(!isCategoryOpen);
    }
    const toggleLocation = () => {
        setLocationOpen(!isLocationOpen);
    }
    const toggleRating = () => {
        setRatingOpen(!isRatingOpen);
    }
    const togglePrice = () => {
        setPriceOpen(!isPriceOpen);
    }
    // For notification
    const callbackmessage_land = (data) => {
        console.log("Land ", data);
        setmessagesetter(data);
    }
    const closemessage = () => {
        setmessagesetter(false)
    }

    // For the categories
    const categories = [
        "Cap/Hat/Pagri",
        "Mufler/Scurf",
        "Kurta/Punjabi",
        "Fotua/Salware Kameez",
        "Saree",
        "Pant/Pajama",
        "Lungi",
        "Footwear",
        "Bags",
        "Mats and Rugs",
        "Beadsheets and Katha",
        "Flower Vase",
        "Pottery",
        "Utensils",
        "Jewelry",
        "Furniture",
        "Musical Instrument",
        "Painting",
        "Home Decor",
        "WoodBlock Printing",
        "Conch Shell Craft"
    ];
    const [categoryCheckbox, setCategoryCheckbox] = useState(new Array(categories.length).fill(false));

    // Min price and max price
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // For rating checkbox
    const [ratingCheckbox, setRatingCheckbox] = useState(new Array(5).fill(false));
    const buyerId = sessionStorage.getItem("buyer_id");
    // Category => thik korte hbe
    // district = districtValue
    // division = divisionValue
    // price[gte]=minPrice&price[lte]=maxPrice
    // rating => thik korte hbe

    // useEffect(()=>{
    //     categoryCheckbox.forEach((catCheck, index)=>{
    //         if(catCheck){
    //             let newCategory = [...selectedCategory];
    //             newCategory[index] = categories[index];
    //             setCategory(newCategory);
    //         }
    //         console.log("The selected categories are:\n", selectedCategory);
    //     })
    // },[categoryCheckbox])

    const filtering = () => {
        axios.get(`http://localhost:3000/product-listing?category=${selectedCategory}&district=${districtValue}&division=${divisionValue}&rating=${selectedRating}&price[gte]=${minPrice}&price[lte]=${maxPrice}`)
            .then((response) => {
                // console.log("The filtered response is\n", response);
                // console.log("The filtered data is\n", response.data);
                setProducts(response.data);
                setCount(response.data.length);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/product-listing`)
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
                setCount(response.data.length);
                // console.log("from product:" + sessionStorage.getItem("uid"));
            })
    }, [])
    return (
        <>
            {buyerId ? <CraftForm callback2={callbackmessage_land} /> : <Navbar />}
            {notification.toggle && <Notification />}
            <div className={style.container}>
                <div className={style['hero-section']}>
                    <h1>Handicraft Products</h1>
                    <p>Buy the traditional handicraft items from various categories.</p>
                </div>
                <div className={style['filter-and-products']}>
                    <div className={style['filter']}>
                        <p className={style['filter-heading']}>Filter</p>
                        <div className={style['collapsible-menu']}>
                            <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleCategory}>
                                {isCategoryOpen ?
                                    <div>
                                        <img src="/images/down.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Categories</div>
                                    </div>
                                    : <div>
                                        <img src="/images/right.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Categories</div>
                                    </div>}
                            </div>
                            {isCategoryOpen &&

                                <ul className={style['categories-list']}>
                                    {categories.map((cat, index) => {
                                        const styling = {
                                            cursor: "pointer",
                                            gap: "5px",
                                            margin: "5px 0px"
                                        }
                                        return <li key={index}>
                                            <label style={styling}>
                                                <input type="checkbox" checked={categoryCheckbox[index]} onChange={(e) => {
                                                    e.preventDefault;
                                                    const updatedCheckbox = [...categoryCheckbox];
                                                    updatedCheckbox[index] = !categoryCheckbox[index];
                                                    // console.log("Checkbox state updated:", updatedCheckbox);
                                                    setCategoryCheckbox(updatedCheckbox);
                                                    console.log("Before setting the category\n", selectedCategory);
                                                    if (updatedCheckbox[index]) {
                                                        setCategory((prev) => [...prev, categories[index]]);
                                                    } else {
                                                        setCategory((prev) => prev.filter((cat) => cat !== categories[index]));
                                                    }
                                                    console.log("After setting the category\n", selectedCategory);

                                                }} />
                                                {'  ' + cat}
                                            </label>
                                        </li>
                                    })}
                                </ul>
                            }
                            <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleLocation}>
                                {isLocationOpen ?
                                    <div>
                                        <img src="/images/down.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Location</div>
                                    </div>
                                    : <div>
                                        <img src="/images/right.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Location</div>
                                    </div>}
                            </div>
                            {isLocationOpen &&
                                <>
                                    <select onChange={(e) => setDivisionValue(e.target.value)} value={divisionValue}>
                                        <option value=''>Select a division</option>
                                        {Division.getDivision()?.map(div => {
                                            return <option value={div}>{div}</option>
                                        })}
                                    </select>
                                    <select value={districtValue} onChange={(e) => setDistrictValue(e.target.value)}>
                                        <option value=''>Select a district</option>
                                        {Division.getDistrict(divisionValue)?.map((dist) => {
                                            return <option value={dist}>{dist}</option>
                                        })}
                                    </select>
                                </>
                            }
                            <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={toggleRating}>
                                {isRatingOpen ?
                                    <div>
                                        <img src="/images/down.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Rating</div>
                                    </div>
                                    : <div>
                                        <img src="/images/right.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Rating</div>
                                    </div>}
                            </div>
                            {isRatingOpen &&
                                <ul className={style['categories-list']}>
                                    {[...Array(5)].map((star, index) => {
                                        const styling = {
                                            cursor: "pointer",
                                            display: "flex",
                                            gap: "5px",
                                            margin: "5px 0px"
                                        }
                                        return <li>
                                            <label style={styling}>
                                                <input type="checkbox"
                                                    checked={ratingCheckbox[index]}
                                                    onChange={() => {
                                                        const updatedCheckbox = [...ratingCheckbox];
                                                        updatedCheckbox[index] = !ratingCheckbox[index];
                                                        setRatingCheckbox(updatedCheckbox);

                                                        if (updatedCheckbox[index]) {
                                                            setRating((prev) => [...prev, 5 - index]);
                                                        } else {
                                                            setRating((prev) => prev.filter((rat) => rat !== (5 - index)));
                                                        }
                                                    }}
                                                />
                                                <ShowStar rating={5 - index} sz={20} />
                                            </label>
                                        </li>
                                    })}
                                </ul>

                            }
                            <div style={{ cursor: "pointer", marginBottom: "5px" }} onClick={togglePrice}>
                                {isPriceOpen ?
                                    <div>
                                        <img src="/images/down.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Price Range</div>
                                    </div>
                                    : <div>
                                        <img src="/images/right.svg" alt="down" style={{ display: "inline" }} />
                                        <div style={{ display: "inline" }}>Price Range</div>
                                    </div>}
                            </div>
                            {isPriceOpen &&
                                <div className={style['price-range']}>
                                    <input type="text" placeholder="Min" value={minPrice} onChange={(e) => {
                                        setMinPrice(e.target.value);
                                    }} />
                                    <input type="text" placeholder="Max" value={maxPrice} onChange={(e) => {
                                        setMaxPrice(e.target.value);
                                    }} />
                                </div>
                            }
                        </div>
                        <Button
                            text="Apply"
                            change={filtering}
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
                                const { _id, productName, district, division, price, Product_img1,category } = product;
                                return (
                                    <Link to={`/product-listing/${_id}`} key={_id}>
                                        <Card
                                            image={Product_img1 ? Product_img1 : nakshiKathaImage}
                                            rating={4}
                                            productName={productName}
                                            category={category}
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
            {messageset && <Messaging closemessage={closemessage} />}
            <Footer />
        </>
    );
}