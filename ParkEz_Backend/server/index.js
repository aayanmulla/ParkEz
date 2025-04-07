const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const connectDB = require('./db/db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Import routes
const signupRoutes = require('./routes/signup');
const authRoutes = require('./routes/authRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reservedRoutes = require('./routes/reservedRoutes');

const app = express();

// Log startup for debugging
console.log('App starting...');

// Connect to MongoDB with error handling
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection failed:', err);
    // Don't exit in Vercel; log and continue to allow basic routes
  });

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://park-ez-frontend.vercel.app',
  'https://park-ez-frontend-aayan-mullas-projects.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  console.log('Received request for /api/test');
  res.json({ message: 'API is working from Vercel!' });
});

// Root route
app.get('/', (req, res) => {
  console.log('Received request for /');
  res.send('Backend is running');
});

// Application routes
app.use('/api/signup', signupRoutes);
app.use('/api', authRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/slots', reservedRoutes);
app.use('/api/reserved', reservedRoutes);

// Token validation route
app.get('/validate-token', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, decoded });
  } catch (err) {
    res.json({ valid: false, error: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Log before exporting
console.log('Routes registered');

// Export for Vercel
module.exports.handler = serverless(app);

// Local development with WebSocket (skipped on Vercel)
if (!process.env.VERCEL) {
  const http = require('http');
  const WebSocket = require('ws');

  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New WebSocket client connected');
    ws.on('message', (message) => {
      console.log('Received message:', message);
      ws.send('Server received: ' + message);
    });
    ws.on('close', () => console.log('WebSocket client disconnected'));
  });

  const PORT = process.env.PORT || 5001;
  server.listen(PORT, () => {
    console.log(`Local server with WebSocket running on port ${PORT}`);
  });
}