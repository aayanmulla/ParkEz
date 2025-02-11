// // src/components/Login.js

// import React, { useState } from "react";
// import { signInWithGoogle } from "../Firebase" // Import the Google Sign-In function
// import "./Login.css"; // Ensure you have this CSS file for styling
// import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";


// const Login = () => {
//     const [user, setUser] = useState(null);

//     const handleGoogleSignIn = async () => {
//         try {
//             const result = await signInWithGoogle();
//             setUser(result.user); // Store user info
//             console.log("User signed in:", result.user);
//         } catch (error) {
//             console.error("Google Sign-In Error:", error);
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 <div className="top-right-links">
//                     <span>New User? <a href="#">Sign Up</a></span>
//                 </div>
//                 <h1 className="logo">ParkEz</h1>
//                 <h2>Welcome Back!</h2>
//                 <p>Login to continue</p>

//                 <form className="login-form">
//                     <div className="input-group">
//                         <input type="email" placeholder="username11@gmail.com" required />
//                     </div>
//                     <div className="input-group">
//                         <input type="password" placeholder="Enter Password" required />
//                     </div>
//                     <button type="submit" className="login-button">LOGIN</button>
//                     <div className="footer-links">
//                         <a href="#">Forgot Password?</a>
//                     </div>
//                 </form>

//                 <div className="login-social">
//                     <p>Login with</p>
//                     <div className="social-icons">
//                         <FaGoogle size={30} color="red" onClick={handleGoogleSignIn} style={{ cursor: "pointer" }} />
//                         <FaFacebook size={30} color="blue" style={{ cursor: "pointer" }} />
//                         <FaTwitter size={30} color="skyblue" style={{ cursor: "pointer" }} />
//                     </div>
//                 </div>

//                 {user && (
//                     <div className="user-info">
//                         <p>Logged in as: {user.displayName}</p>
//                         <button onClick={() => console.log("Implement Logout")}>Logout</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Login;