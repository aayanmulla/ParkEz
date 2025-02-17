const express = require('express');
const connectDB = require('./db/db'); // Adjust the path if `connectDB` is in a different folder
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
