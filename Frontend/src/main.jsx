import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import SignIn from './Sign_in.jsx'
import LogIn from './Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SignIn/> */}
    <LogIn/>
  </React.StrictMode>,
)
