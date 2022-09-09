import React from "react";
//module
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//views
import Home from "./js/Views/Home";
import About from "./js/Views/About";
import Contact from "./js/Views/Contact";
import Login from "./js/Views/Login";
import DashBoard from "./js/Views/DashBoard";
//components
import Navigation from "./js/Components/Navigation";
import Footer from "./js/Components/Footer";


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <div className="app">
    <React.StrictMode>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<DashBoard/>} />
            </Routes>
        </Router>
        <Footer/>


    </React.StrictMode>
</div>
);
