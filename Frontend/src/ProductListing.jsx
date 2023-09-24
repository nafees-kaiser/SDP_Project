import React from "react";
import style from "./ProductListing.module.css"


export default function ProductListing(){
    return (
        <>
            <div>navbar</div>
            <div className={style['hero-section']}>
                <h1>Handicraft Products</h1>
                <p>Buy the traditional handicraft items from various categories.</p>
            </div>
            <div className={style['product-list']}>
                <div className={style['sort-and-filter']}>
                    <p>100 products</p>
                    <button>Filter</button>
                    <button>Sort by</button>
                </div>
                <div className={style['product-cards']}>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Review</p>
                        <p>Product Name</p>
                        <p>Location</p>
                        <p>Price</p>
                    </div>
                </div>
                <button>Load more</button>
                <footer>
                    
                </footer>
            </div>
        </>
    );
}