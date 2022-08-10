import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import ApiService from "./Core/Axios/ApiService";



const createApp = ()=>{
    ApiService.init("https://api.themoviedb.org/3");
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <Router>

                <App />

        </Router>
    )
}

createApp();