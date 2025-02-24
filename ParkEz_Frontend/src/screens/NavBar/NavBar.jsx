import React, { useState, useEffect, useRef } from 'react';
import StylePrimarySmall from "../../components/StylePrimarySmall/StylePrimarySmall.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to get user data
    const fetchUser = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            // ✅ Generate profile image if missing
            const firstLetter = parsedUser.username?.charAt(0).toUpperCase() || "U";
            const profileImageUrl = parsedUser.profileImage || 
                `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff&size=128`;

            setUser({
                ...parsedUser,
                profileImage: profileImageUrl
            });
        }
    };

    // ✅ Detect scroll and change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change navbar when scrolled 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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

    const handleNavigateToServices = () => {
        if (window.location.pathname === "/") {
            // Scroll smoothly to the Our Services section
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to home page first, then scroll
            navigate("/", { state: { scrollToServices: true } });
        }
    };

    const handleFillProfile = () =>{
        navigate("/fillprofile", {state: {goToFillProfile: true}});
    }

    return (
        <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
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
                    <div className="navbar-link" onClick={handleNavigateToServices} style={{ cursor: 'pointer' }}>
                        <span className="navbar-link-text">Our Services</span>
                    </div>
                    <div className="navbar-link" onClick={() => navigate("/aboutus")} style={{ cursor: 'pointer' }}>
                        <span className="navbar-link-text">About Us</span>
                    </div>
                </div>

                {/* ✅ Show Profile if Logged In, Otherwise Show Sign Up */}
                {user ? (
                    <div className="navbar-profile" ref={dropdownRef}>
                        <div className="profile-container">
                            <img 
                                className="profile-image"
                                src={user.profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                                alt="User Profile"
                                onClick={() => setDropdownOpen(!dropdownOpen)} // ✅ Toggle dropdown on click
                            />
                            {dropdownOpen && (
                                <div className="profile-dropdown">
                                    <p className="dropdown-item logout" onClick={handleLogout}>Logout</p>
                                    <p className='dropdown-item fillprofile' onClick={handleFillProfile}>Update Profile</p>
                                </div>
                            )}
                        </div>
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
