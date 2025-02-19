const express = require('express');
const signupController = require('../controllers/signup.controller');

const router = express.Router();

// Signup route
router.post('/', signupController.signup);

module.exports = router;