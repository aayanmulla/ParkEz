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

// Enhanced startup logging
console.log('App starting in environment:', process.env.NODE_ENV || 'development');
console.log('Current working directory:', process.cwd());

// Connect to MongoDB with detailed error handling
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    // Continue execution for basic routes, but log failure
  });

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://park-ez-frontend.vercel.app',
  'https://park-ez-frontend-aayan-mullas-projects.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS origin check:', origin);
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

// Test route with detailed logging
app.get('/api/test', (req, res) => {
  console.log('Received request for /api/test', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });
  res.json({ message: 'API is working from Vercel!' });
});

// Root route with detailed logging
app.get('/', (req, res) => {
  console.log('Received request for /', {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });
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
  console.log('Validating token:', token ? 'present' : 'missing');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, decoded });
  } catch (err) {
    console.error('Token validation error:', err.message);
    res.json({ valid: false, error: err.message });
  }
});

// Enhanced error handling middleware
app.use((err, req, res, next) => {
  console.error('Error middleware triggered:', {
    stack: err.stack,
    message: err.message,
    url: req.url,
  });
  res.status(500).json({ error: 'Something went wrong!' });
});

// Final logging before export
console.log('Routes registered');
console.log('Exporting handler with serverless-http');

module.exports = (req, res) => {
    console.log('Function invoked');
    if (req.url === '/api/test') {
      console.log('Handling /api/test');
      res.status(200).json({ message: 'API is working from Vercel!' });
    } else if (req.url === '/') {
      console.log('Handling /');
      res.status(200).send('Backend is running');
    } else {
      console.log('404 for:', req.url);
      res.status(404).json({ error: 'Not Found' });
    }
  };

// Local development with WebSocket (skipped on Vercel)
if (!process.env.VERCEL) {
  const http = require('http');
  const WebSocket = require('ws');

  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New WebSocket client connected');
    ws.on('message', (message) => {
      console.log('Received WebSocket message:', message);
      ws.send('Server received: ' + message);
    });
    ws.on('close', () => console.log('WebSocket client disconnected'));
  });

  const PORT = process.env.PORT || 5001;
  server.listen(PORT, () => {
    console.log(`Local server with WebSocket running on port ${PORT}`);
  });
}