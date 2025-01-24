// src/components/Navbar.jsx
import React from 'react';
import StylePrimarySmall from "../components/StylePrimarySmall/StylePrimarySmall.jsx";


const Navbar = () => {
    return (
        <div className="navbar">
            <img
                className="parkez-nobg"
                alt="Parkez nobg"
                src="https://c.animaapp.com/BPgiiEYf/img/parkez-nobg-1.png"
            />

            <div className="container">
                <div className="column">
                    <div className="link">
                        <div className="link-text">Home</div>
                    </div>

                    <div className="link-text-wrapper">
                        <div className="link-text-2">Our Services</div>
                    </div>

                    <div className="link">
                        <div className="link-text">About Us</div>
                    </div>
                </div>

                <div className="actions">
                    <StylePrimarySmall
                        className="style-primary-small-true-alternate-false-icon-position-no-icon"
                        divClassName="style-primary-small-instance"
                        text="Sign Up"
                    />
                </div>
            </div>
        </div>

    );
};

export default Navbar;
