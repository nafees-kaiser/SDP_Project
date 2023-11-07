import React from "react";


import Registration from './Registration.jsx'
import LogIn from './Login.jsx'
import ProductListing from './ProductListing.jsx'
import IndividualProduct from './IndividualProduct.jsx'
import Become_seller from './Become_seller.jsx'
import Checkout from './Checkout.jsx'
import Footer from "./Components/Footer.jsx";
import { Routes,Route } from "react-router";
import Home_seller from "./Home_seller.jsx";
import Authentication from "./Authentication.jsx";
import Messaging from "./Messaging.jsx";
import Seller_Registration from "./Seller_Registration.jsx";
import SellerLogin from "./SellerLogin.jsx"
import LandingPage from "./LandingPage.jsx";
import ProfileBox from "./ProfileBox.jsx";
import BuyerProfileBox from "./BuyerProfileBox.jsx";
import BuyerProfile from "./BuyerProfile.jsx";
import KnowTheCraft from "./KnowTheCraft.jsx";
import SellerProfile from "./SellerProfile.jsx";
import LoginNav from "./Components/LoginNav.jsx";
import ViewWishlist from "./Wishlist.jsx";
import Add_Know from "./Add_Know.jsx";
import Confirmation1 from "./Confirmation1.jsx";



const Routing = ()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>
                <Route path='/registration' element={<Registration/>}></Route>
                <Route path='/product-listing' element={<ProductListing/>}></Route>
                <Route path='/product-listing/:id' element={<IndividualProduct/>}></Route>
                <Route path='/become_seller' element={<Become_seller/>}></Route>
                {/* <Route path='/checkout/:obj' element={<Checkout/>}></Route> */}
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/become_seller' element={<Become_seller/>}></Route>
                <Route path='/home_seller' element={<Home_seller/>}></Route>
                <Route path='/auth' element={<Authentication/>}></Route>
                <Route path='/message' element={<Messaging/>}></Route>
                <Route path='/seller_reg' element={<Seller_Registration/>}></Route>
                <Route path='/seller_login' element={<SellerLogin/>}></Route>
                <Route path='/profile_box' element={<ProfileBox/>}></Route>
                <Route path='/buyer_profile_box' element={<BuyerProfileBox/>}></Route>
                <Route path='/buyer_profile' element={<BuyerProfile/>}></Route>
                <Route path='/know-the-craft' element={<KnowTheCraft/>}></Route>
                <Route path='/seller_profile' element={<SellerProfile/>}></Route>
                <Route path='/login_nav' element={<LoginNav/>}></Route>
                <Route path='/Wishlist' element={<ViewWishlist/>}></Route>
                <Route path='/Add_know' element={<Add_Know/>}></Route>
                <Route path='/Confirmation1/:order_id?' element={<Confirmation1/>}></Route>
            </Routes>
        </>
    )
}
export default Routing;