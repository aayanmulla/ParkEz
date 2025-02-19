const Signup = require('../models/Signup');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { username, email, password, retypepassword } = req.body;

    try {
        // Check if user already exists
        let user = await Signup.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user
        user = new User({
            username,
            email,
            password,
            retypepassword
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user to the database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};