import React from "react";
import "./Background.css";

export default function Background({ backgroundImage, children }) {
    return (
        <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div> 
            <div className="content">{children}</div> 
        </div>
    );
}
