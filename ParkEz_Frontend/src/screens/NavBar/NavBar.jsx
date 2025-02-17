import React from 'react';
import StylePrimarySmall from "../../components/StylePrimarySmall/StylePrimarySmall.jsx";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleServicesClick = () => {
        
        // Check if element exists
        const servicesSection = document.getElementById("services");
        
        if (servicesSection) {
            
            // Try direct scroll first
            servicesSection.scrollIntoView({ behavior: "smooth" });
            
            // Fallback to setTimeout approach
            setTimeout(() => {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } 
    };

    return (
        <nav className="navbar-container">
            <img
                className="navbar-logo"
                alt="Parkez Logo"
                src="https://c.animaapp.com/BPgiiEYf/img/parkez-nobg-1.png"
            />
            <div className="navbar-content">
                <div className="navbar-links">
                    <div className="navbar-link">
                        <span className="navbar-link-text">Home</span>
                    </div>
                    <div 
                        className="navbar-link" 
                        onClick={handleServicesClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="navbar-link-text">Our Services</span>
                    </div>
                    <div className="navbar-link">
                        <span className="navbar-link-text">About Us</span>
                    </div>
                </div>
                <div className="navbar-actions" onClick={() => navigate("/login")}>
                    <StylePrimarySmall
                        className="navbar-signup-button"
                        text="Sign Up"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;