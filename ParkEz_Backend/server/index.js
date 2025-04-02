const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Import routes
const signupRoutes = require('./routes/signup');
const authRoutes = require('./routes/authRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const parkingRoutes = require("./routes/parkingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reservedRoutes = require("./routes/reservedRoutes");

// Connect to MongoDB
connectDB();

const app = express();

// CORS Configuration
const allowedOrigins = [
    "http://localhost:3000", 
    "https://park-ez-frontend.vercel.app",
    "https://park-ez-frontend-aayan-mullas-projects.vercel.app"
];

app.use((req, res, next) => {
    const allowedOrigins = [
        "http://localhost:3000",
        "https://park-ez-frontend.vercel.app",
        "https://park-ez-frontend-aayan-mullas-projects.vercel.app"
    ];
    
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});


app.options("*", cors()); // Allow preflight for all routes

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // Set dynamic origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    
    next();
});

app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Backend is running'));
app.use('/api/signup', signupRoutes);
app.use('/api', authRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/slots", reservedRoutes);
app.use('/api/reserved', reservedRoutes);

// Temporary route for testing
app.get('/validate-token', (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ valid: true, decoded });
    } catch (err) {
      res.json({ valid: false, error: err.message });
    }
  });

// Export for Vercel
const vercelHandler = app;

// Local development with WebSocket
if (!process.env.VERCEL) {
    const http = require('http');
    const WebSocket = require('ws');
    
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });

    wss.on("connection", (ws) => {
        console.log("New WebSocket client connected");
        ws.on("message", (message) => {
            console.log("Received message:", message);
            ws.send("Server received: " + message);
        });
        ws.on("close", () => console.log("WebSocket client disconnected"));
    });

    const PORT = process.env.PORT || 5001;
    server.listen(PORT, () => {
        console.log(`Local server with WebSocket running on port ${PORT}`);
    });
}

module.exports = vercelHandler;