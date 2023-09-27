import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Registration from './Registration.jsx'
import LogIn from './Login.jsx'
import ProductListing from './ProductListing.jsx'
import IndividualProduct from './IndividualProduct.jsx'
import Checkout from './Checkout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />
    },
    {
        path: "/login",
        element: <LogIn/>
    },
    {
        path: "/product-listing",
        element: <ProductListing/>
    },
    {
        path: `/individual-product/:id`,
        element: <IndividualProduct/>
    },
    {
        path: '/checkout/:obj',
        element: <Checkout/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Registration /> */}
        
        <RouterProvider router={router} />
        
    </React.StrictMode>,
)
