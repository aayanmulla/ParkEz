const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signup.controller');
const { login } = require('../controllers/auth.controller'); // Import login function

// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

module.exports = router;
