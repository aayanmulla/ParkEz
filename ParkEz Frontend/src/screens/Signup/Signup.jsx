import React from "react";
import "./Signup.css";
const Signup = () => {
    return(
        <div className="signup-container">
            <div className="signup-card">
                <div className="top-right-links">
                    <span>Already have an account? <a href="/login" className="login-link">Login</a></span>
                </div>
                <h1 className="logo">ParkEz</h1>
                <h2>Sign Up</h2>
                <p>Register to continue</p>

                <form className="signup-form">
                    <div className="input-group">
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email Id" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Enter Password" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit" className="signup-button">SIGN UP</button>
                </form>
            </div>
        </div>
    );
};
export default Signup;