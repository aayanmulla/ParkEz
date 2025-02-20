import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../Firebase"; // Import Google Sign-In function
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Login.css"; // Ensure you have this CSS file for styling

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // ✅ Hook for navigation

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle login form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous error

        try {
            const response = await axios.post("http://localhost:5001/api/login", formData, {
                headers: { "Content-Type": "application/json" }
            });

            if (response.status === 200) {
                const { token, user } = response.data;

                // ✅ Store token & user info in localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                alert("Login successful!");
                
                // ✅ Redirect to bookings page
                navigate("/bookings");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.response?.data?.msg || "Invalid email or password.");
        }
    };

    // Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            setUser(result.user); // Store user info
            console.log("User signed in:", result.user);

            // Redirect to bookings page
            navigate("/bookings");
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="top-right-links">
                    <span>New User? <a href="/signup">Sign Up</a></span>
                </div>
                <h1 className="logo">ParkEz</h1>
                <h2>Welcome Back!</h2>
                <p>Login to continue</p>

                {error && <p className="error-message">{error}</p>} {/* Show error message */}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="username11@gmail.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-button">LOGIN</button>
                    <div className="footer-links">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>

                <div className="login-social">
                    <p>Login with</p>
                    <div className="social-icons">
                        <FaGoogle size={30} color="red" onClick={handleGoogleSignIn} style={{ cursor: "pointer" }} />
                        <FaFacebook size={30} color="blue" style={{ cursor: "pointer" }} />
                        <FaTwitter size={30} color="skyblue" style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
