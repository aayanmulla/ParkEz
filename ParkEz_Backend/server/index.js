const express = require('express');
const http = require('http'); // Required for WebSocket
const WebSocket = require('ws'); // Import WebSocket library
const connectDB = require('./db/db');
require('dotenv').config();
const signupRoutes = require('./routes/signup');
const authRoutes = require('./routes/authRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const parkingRoutes = require("./routes/parkingRoutes");
const cors = require('cors');

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app); // Create HTTP server for WebSocket
const wss = new WebSocket.Server({ server });

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// WebSocket connection handler
wss.on("connection", (ws) => {
    console.log("New WebSocket client connected");

    ws.on("message", (message) => {
        console.log("Received message:", message);
        ws.send("Server received: " + message);
    });

    ws.on("close", () => {
        console.log("WebSocket client disconnected");
    });
});

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/signup', signupRoutes);
app.use('/api', authRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/parking", parkingRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
