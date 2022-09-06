import React from "react";
import ReactDOM from "react-dom";
import Home from "./js/Views/Home";



export default function Main() {
    
    return (
        <div className="app"><Home/></div>
    );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Home />, rootElement);
