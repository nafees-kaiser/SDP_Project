import React from "react";
import style from "./ProductListing.module.css"
import nakshiKathaImage from "./assets/nakshi_katha(1).jpg";
import Card from "./Components/Card";


export default function ProductListing() {
    return (
        <div className={style.container}>
            <div>navbar</div>
            <div className={style['hero-section']}>
                <h1>Handicraft Products</h1>
                <p>Buy the traditional handicraft items from various categories.</p>
            </div>
            <div className={style['product-list']}>
                <div className={style['sort-and-filter']}>
                    <p>100 products</p>
                    {/* <button>Filter</button>
                        <button>Sort by</button> */}
                </div>
                <div className={style['product-cards']}>
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

                </div>
                <button className={style.button}>Load more</button>
            </div>
            <footer>
                footer
            </footer>
        </div>
    );
}