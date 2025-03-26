const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? process.env.REACT_APP_LOCAL_API_BASE_URL 
  : process.env.REACT_APP_API_BASE_URL;

const API_ENDPOINTS = {
    SIGNUP: `${API_BASE_URL}/signup`,           // Signup (Send OTP)
    VERIFY_OTP: `${API_BASE_URL}/signup/verifyOTP`,  // OTP Verification
    LOGIN: `${API_BASE_URL}/auth/login`,       // Login
    FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`, // Forgot Password
};

export default API_ENDPOINTS;
