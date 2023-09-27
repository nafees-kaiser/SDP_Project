import React from "react";


import Registration from './Registration.jsx'
import LogIn from './Login.jsx'
import ProductListing from './ProductListing.jsx'
import IndividualProduct from './IndividualProduct.jsx'
import Become_seller from './Become_seller.jsx'
import { Routes,Route } from "react-router";

const Routing = ()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<LogIn/>}></Route>
                <Route path='/registration' element={<Registration/>}></Route>
                <Route path='/product-listing' element={<ProductListing/>}></Route>
                <Route path='/individual-product/:id' element={<IndividualProduct/>}></Route>
                <Route path='/become_seller' element={<Become_seller/>}></Route>
            </Routes>
        </>
    )
}
export default Routing;