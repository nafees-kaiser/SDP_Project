import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import LogIn from './Login.jsx';
import ProductListing from './ProductListing.jsx';
import IndividualProduct from './IndividualProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />
  },
  {
    path: '/product-listing',
    element: <ProductListing />
  },
  {
    path: '/individual-product',
    element: <IndividualProduct />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SignIn/> */}
    {/* <LogIn/> */}
    {/* <ProductListing /> */}
    {/* <IndividualProduct/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
