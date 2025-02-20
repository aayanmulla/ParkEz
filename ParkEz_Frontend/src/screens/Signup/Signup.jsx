import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "axios"; 
import "./Signup.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        retypepassword: "",
    });

    const navigate = useNavigate(); // ✅ Initialize navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.retypepassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // ✅ Send a POST request using Axios
            const response = await axios.post("http://localhost:5001/api/signup", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                retypepassword: formData.retypepassword,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                const { token, user } = response.data;

                // ✅ Store token & user info in localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                alert("Signup successful!");

                // ✅ Redirect to Bookings Page
                navigate("/bookings");
            }
        } catch (error) {
            console.error("Signup error:", error);

            // Handle errors properly
            if (error.response) {
                alert(error.response.data.msg || "Signup failed. Please try again.");
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="top-right-links">
                    <span>Already have an account? <a href="/login" className="login-link">Login</a></span>
                </div>
                <h1 className="logo">ParkEz</h1>
                <h2>Sign Up</h2>
                <p>Register to continue</p>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Full Name"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
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
                    <div className="input-group">
                        <input
                            type="password"
                            name="retypepassword"
                            placeholder="Confirm Password"
                            value={formData.retypepassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        SIGN UP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
