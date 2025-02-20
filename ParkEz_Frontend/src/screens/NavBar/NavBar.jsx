import React, { useState, useEffect } from 'react';
import StylePrimarySmall from "../../components/StylePrimarySmall/StylePrimarySmall.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // ✅ Add this import
import "./NavBar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // ✅ Fetch user data from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleServicesClick = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } 
    };

    const handleLogout = () => {
        // ✅ Clear localStorage on logout
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar-container">
        <Link to="/">
            <img
                className="navbar-logo"
                alt="Parkez Logo"
                src="https://c.animaapp.com/BPgiiEYf/img/parkez-nobg-1.png"
                style={{ cursor: "pointer" }} // ✅ Make it look clickable
            />
        </Link>
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

                {/* ✅ Show Profile Icon if User is Logged In */}
                {user ? (
                    <div className="navbar-profile">
                        <img 
                            className="profile-image"
                            src={user.profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                            alt="User Profile"
                        />
                        <span className="username">{user.username}</span>
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    // Show Sign Up button if user is not logged in
                    <div className="navbar-actions" onClick={() => navigate("/login")}>
                        <StylePrimarySmall
                            className="navbar-signup-button"
                            text="Sign Up"
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
