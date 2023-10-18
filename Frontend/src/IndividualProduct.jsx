import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import style from "./IndividualProduct.module.css"
import CraftForm from "./Components/CraftForm";
import nakshikathaImage from '../images/nakshi_katha(1).jpg'
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



export default function IndividualProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reviews, setreview] = useState([]);
    const [amount, setAmount] = useState(0);
    const [reviewDescription, setReviewData] = useState();
    const navigate = useNavigate();
    const buyerId = sessionStorage.getItem('buyer_id');

    const routeChange = () => {
        if (product) {
            const obj = JSON.stringify({ product, amount })
            navigate(`/checkout/${obj}`);
        }
    }

    const handleChange= (e) => 
    {
        setReviewData(e.target.value);
    };

    function setvalue()
    {
        const DataofForm ={
        'reviewDescription':reviewDescription,
        'productId' : id
        };
        return DataofForm;
    }

    function setWishlist()
    {
        const productData ={
            'buyerid': buyerId,
            'productid' : id
            };
            return productData;
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/product-listing/${id}`)
            .then((response) => {
                // console.log(response.data);
                setProduct(response.data);
            })
        
        axios.get(`http://localhost:3000/reviews/${id}`)
            .then((response) => {
                if(response.data.reviews != 0)
                {
                    setreview(response.data.reviews);
                }
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

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        const reviewData = setvalue();
        console.log(reviewData);
        axios.post('http://localhost:3000/add/review', reviewData)
            .then((response) => {
                //console.log(response.data);
                window.location.reload();
            })
    }

    const addToWishlist = async () => {
        const wishlistData = setWishlist();
        axios.post('http://localhost:3000/create/wishlist', wishlistData)
            .then((response) => {
                alert('Product added to wishlist successfully');
                console.log(response.data);
            })
    }

    const { productName, district, division, price, seller, description } = product
    return (
        <>
            {buyerId ? <CraftForm /> : <Navbar />}
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
                                <p>{`${price} Tk`}</p>
                                <p></p>
                                <button onClick={addToWishlist} type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 text-4xl font-medium focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-32 h-12">
                                    Wishlist    
                                </button>                               
                            </div>
                            <br />
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
                        <h2><b>Description</b></h2>
                        <div className={style.description}>
                            {description}
                        </div>
                    </div>
                </div>
                <h2><b>Reviews</b></h2>
                <br /> <br />

                {reviews.map((review) => (
                    <article>
                        <div class="flex items-center mb-4 space-x-4">
                            <img class="w-10 h-10 rounded-full" src="/anonymous.png" alt=""></img>
                            <div class="space-y-1 font-medium dark:text-white">
                                <p>Anonymous </p>
                            </div>
                        </div>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">{review.reviewDescription}</p>
                        <br />
                    </article>
                ))}
                <br /><br />
                
                <form onSubmit={handleReviewSubmit}>
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea name="reviewDescription" id="comment" onChange={handleChange} rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a Review..." required></textarea>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Post Review
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <Footer/>
        </>
    );
}