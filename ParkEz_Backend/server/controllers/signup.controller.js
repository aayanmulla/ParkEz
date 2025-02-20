const Signup = require('../models/Signup');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { username, email, password, retypepassword } = req.body;

    try {
        // Check if user already exists
        let user = await Signup.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Check if passwords match
        if (password !== retypepassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }

        // ✅ Create a new user (without retypepassword)
        user = new Signup({
            username,
            email,
            password, // Store only the hashed password
            retypepassword
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user to the database
        await user.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: user._id, username: user.username, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({
            msg: 'User registered successfully',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        });
    } catch (err) {
        console.error("Signup error:", err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};
