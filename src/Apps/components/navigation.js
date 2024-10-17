import React from "react";
import "../css-folder/nav.css";
import logo from "../img/logo.svg"; 

const NavigationSection = (props) => {
    const parameters = {
        name: "My Website",
        image: logo,
        nav: [
            { key: "nav1", label: "Home", url: "home.html" },
            { key: "nav2", label: "About", url: "about.html" },
            { key: "nav3", label: "Contact Us", url: "contact.html" }
        ]
    };

    return (
        <div>
            <nav className="navigation">
                <div className="logo-section">
                    <h1>{parameters.name}</h1>
                    <img className="logo" src={parameters.image} alt="Logo" />
                </div>
                <div className="nav-content">
                    {(parameters.nav).map((index) => (
                        <li><a href={index.url}>{index.label}</a></li>
                    ))}
                </div>
            </nav>
        </div>
        
    );
}

export default NavigationSection;
