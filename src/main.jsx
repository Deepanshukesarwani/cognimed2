import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {DetailProvider} from "../src/Context/Details"
ReactDOM.createRoot(document.getElementById('root')).render(
 
     <BrowserRouter>
     <DetailProvider>
      <App />
     </DetailProvider>
    </BrowserRouter>
 
)
