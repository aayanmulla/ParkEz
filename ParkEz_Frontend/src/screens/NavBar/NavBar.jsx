import React, { useState, useEffect } from 'react';
import StylePrimarySmall from "../../components/StylePrimarySmall/StylePrimarySmall.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Function to get user data
    const fetchUser = () => {
        const storedUser = localStorage.getItem("user");
        console.log("Navbar - Stored User:", storedUser);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    };

    useEffect(() => {
        fetchUser(); // ✅ Fetch when Navbar mounts

        // ✅ Listen for localStorage changes (fixes issue when data updates)
        window.addEventListener("storage", fetchUser);

        return () => {
            window.removeEventListener("storage", fetchUser);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className="navbar-container">
            <Link to="/">
                <img
                    className="navbar-logo"
                    alt="Parkez Logo"
                    src="https://c.animaapp.com/BPgiiEYf/img/parkez-nobg-1.png"
                    style={{ cursor: "pointer" }}
                />
            </Link>

            <div className="navbar-content">
                <div className="navbar-links">
                    <div className="navbar-link" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                        <span className="navbar-link-text">Home</span>
                    </div>
                    <div className="navbar-link" onClick={() => navigate("/services")} style={{ cursor: 'pointer' }}>
                        <span className="navbar-link-text">Our Services</span>
                    </div>
                    <div className="navbar-link" onClick={() => navigate("/aboutus")} style={{ cursor: 'pointer' }}>
                        <span className="navbar-link-text">About Us</span>
                    </div>
                </div>

                {/* ✅ Show Profile if Logged In, Otherwise Show Sign Up */}
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
                    <div className="navbar-actions" onClick={() => navigate("/signup")}>
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
