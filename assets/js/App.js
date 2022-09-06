import React from "react";
import ReactDOM from "react-dom";

import "../styles/app.css";


export default function App() {
    
    return (
        <div className="app">Hello Reactjs</div>
    );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
