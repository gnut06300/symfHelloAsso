import React from "react";
//module
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//views
import Home from "./js/Views/Home";
import About from "./js/Views/About";
import Contact from "./js/Views/Contact";
import Login from "./js/Views/Login";
import DashBoard from "./js/Views/DashBoard";
//components
import Navigation from "./js/Components/Navigation";



export default function Main() {
    
    return (
        <div className="app">
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Router>

        </div>
    );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Main />, rootElement);
