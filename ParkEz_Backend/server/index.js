const express = require('express');
const connectDB = require('./db/db'); // Adjust the path if `connectDB` is in a different folder
require('dotenv').config();
const signupRoutes = require('./routes/signup'); // Adjust the path if `signupRoutes` is in a different folder
const authRoutes = require('./routes/authRoutes'); // Adjust the path if `authRoutes` is in a different folder
const app = express();
const cors = require('cors');

// Connect to MongoDB
connectDB();

app.use(cors({
    origin: "http://localhost:3000", // Change this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware for parsing JSON
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});
// Routes
app.use('/api/signup', signupRoutes);
app.use('/api', authRoutes);
app.use("/api/auth", authRoutes); //forgot password

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
