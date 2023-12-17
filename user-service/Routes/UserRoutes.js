// routes/userRoutes.js
const express = require('express');
const passport = require('../config/passport');
const User = require('../models/User');

const router = express.Router();

// Create user
router.post('/users', async (req, res) => {
    try {
        const { username, fullName, password, driverLicense, vehicles } = req.body;

        if (!vehicles || vehicles.length === 0) {
            return res.status(400).json({ error: 'At least one vehicle information is required.' });
        }

        const user = new User({
            username,
            fullName,
            password,
            driverLicense,
            vehicles,
        });

        await user.save();

        res.status(201).json({ userId: user._id, message: 'User created. Waiting for admin verification.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Authentication
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
});


// Get user by ID
router.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update user by ID (for admin verification)
router.put('/users/:userId/verify', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { adminId, adminName, verificationStatus } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.adminVerification.status !== 'PENDING') {
            return res.status(400).json({ error: 'User is already verified or rejected.' });
        }

        user.adminVerification.status = verificationStatus;
        user.adminVerification.adminId = adminId;
        user.adminVerification.adminName = adminName;
        user.adminVerification.verificationDate = new Date();

        await user.save();

        res.status(200).json({ message: 'User verification status updated.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add/update vehicle information for the user
router.post('/users/:userId/vehicles', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { vehicles } = req.body;

        if (!vehicles || vehicles.length === 0) {
            return res.status(400).json({ error: 'At least one vehicle information is required.' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        user.vehicles = vehicles;
        await user.save();

        res.status(200).json({ message: 'Vehicle information updated.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
