const API_BASE_URL = "http://localhost:5001/api";

const API_ENDPOINTS = {
    SIGNUP: `${API_BASE_URL}/signup`,           // Signup (Send OTP)
    VERIFY_OTP: `${API_BASE_URL}/signup/verifyOTP`,  // OTP Verification
    LOGIN: `${API_BASE_URL}/auth/login`,       // Login
    FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`, // Forgot Password
};

export default API_ENDPOINTS;
