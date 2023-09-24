import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import SignIn from './Sign_in.jsx';
import LogIn from './Login.jsx';
import ProductListing from './ProductListing.jsx';
import IndividualProduct from './IndividualProduct.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SignIn/> */}
    {/* <LogIn/> */}
    {/* <ProductListing /> */}
    <IndividualProduct/>
  </React.StrictMode>,
)
