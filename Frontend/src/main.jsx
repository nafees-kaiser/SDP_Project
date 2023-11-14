import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import Routing from './Routing'
import { Provider } from 'react-redux'
//import store from './Store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider >
        <React.StrictMode>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
)
