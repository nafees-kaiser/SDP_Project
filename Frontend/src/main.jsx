import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Registration from './Registration.jsx'
import LogIn from './Login.jsx'
import ProductListing from './ProductListing.jsx'
import IndividualProduct from './IndividualProduct.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Registration />
        {/* <LogIn/> */}
        {/* <ProductListing/> */}
        {/* <IndividualProduct/> */}
    </React.StrictMode>,
)
