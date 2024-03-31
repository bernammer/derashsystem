const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')




const deleteVehicle = (req , res) => {
    try{

    }catch(err){
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })  
    }
}


const resetPassword = (req , res) => {
    try{

    }catch(err){
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })  
    }
}

const changePassword = (req , res) => {
    try{

    }catch(err){
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })  
    }
}

const editProfile = (req , res) => {
    try{

    }catch(err){
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })  
    }
}

const addVehicle = (req , res) => {
    try{

    }catch(err){
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })  
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // User authenticated, generate a token
        const token = jwt.sign(
            { userId: user._id, type: 'user' },
            process.env.USER_TOKEN_SECRET,
            {
                expiresIn: '1h', // Token expires in 1 hour, adjust as needed
            }
        )

        res.json({ token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const verifyUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const { adminId, adminName, verificationStatus } = req.body

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        if (user.adminVerification.status !== 'PENDING') {
            return res
                .status(400)
                .json({ error: 'User is already verified or rejected.' })
        }

        user.adminVerification.status = verificationStatus
        user.adminVerification.adminId = adminId
        user.adminVerification.adminName = adminName
        user.adminVerification.verificationDate = new Date()

        await user.save()

        res.status(200).json({ message: 'User verification status updated.' })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const updateVehicles = async (req, res) => {
    try {
        const userId = req.params.userId
        const { action, vehicles, vehicleIds } = req.body

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        if (action === 'addVehicles') {
            // Add new vehicles
            user.vehicles.push(...vehicles)
        } else if (action === 'removeVehicles') {
            // Remove vehicles by ID
            user.vehicles = user.vehicles.filter(
                (vehicle) => !vehicleIds.includes(vehicle._id.toString())
            )
        } else {
            return res.status(400).json({ error: 'Invalid action.' })
        }

        await user.save()

        res.status(200).json({ message: 'Vehicles updated.' })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const logout = async (req, res) => {
    try {
        res.json({ message: 'Logout successful' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const register = async (req, res) => {
    try {
        // Check if the user making the request is a super admin
        // if (req.user.type !== 'superadmin') {
        //   return res.status(403).json({ error: 'Permission denied. Only super admins can create users.' });
        // }

        const {
            username,
            firstName,
            lastName,
            phone_number,
            password,
            driverLicense,
            vehicles,
        } = req.body

        if (!vehicles || vehicles.length === 0) {
            return res.status(400).json({
                error: 'At least one vehicle information is required.',
            })
        }

        const newUser = new User({
            username,
            firstName,
            lastName,
            phone_number,
            password,
            driverLicense,
            vehicles,
            adminVerification: { status: 'PENDING' },
        })
        await newUser.save()

        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    login,
    getUserById,
    verifyUser,
    updateVehicles,
    logout,
    register,
}
