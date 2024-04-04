const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Vehicle = require('../models/Vehicle')

const resetPassword = async (req, res) => {
    try {
        const { userId } = req.params
        const newPassword = ''
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { password: newPassword },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json({ message: 'Password reset successful' })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const changePassword = async (req, res) => {
    try {
        const { userId } = req.params
        const { newPassword } = req.body

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { password: newPassword },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json({ message: 'Password reset successful' })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const editProfile = async (req, res) => {
    try {
        const userId = req.params.id
        const updatedData = req.body
        const user = await User.findByIdAndUpdate(userId, updatedData)
        if (!user) {
            return res.status(404).json({ error: 'Employee not found' })
        }

        res.status(200).json({ employee: employee })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addVehicle = async (req, res) => {
    try {
        const {
            userId,
            plateNumber,
            chassisNumber,
            engineNumber,
            vehicleType,
            buildInCountry,
            builtInYear,
            carModel,
            motorNumber,
            bodyType,
            color,
            gasType,
            motorHorsePower,
            titleCertificateBookNumber,
            cc,
            cylinderNumber,
            allowedWork,
            axleQuantity,
            licensedCapacity,
        } = req.body

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        } // Create a new vehicle document using the extracted data
        const newVehicle = new Vehicle({
            plateNumber,
            chassisNumber,
            engineNumber,
            vehicleType,
            buildInCountry,
            builtInYear,
            carModel,
            motorNumber,
            bodyType,
            color,
            gasType,
            motorHorsePower,
            titleCertificateBookNumber,
            cc,
            cylinderNumber,
            allowedWork,
            axleQuantity,
            licensedCapacity,
        })
        await newVehicle.save()

        const vehicleId = newVehicle._id
        user.vehicles.push(vehicleId)
        await user.save()
        res.status(200).json({ message: 'Vehicle added successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const { userId, vehicleId } = req.body
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const vehicleIndex = user.vehicles.findIndex(
            (v) => v._id.toString() === vehicleId
        )
        if (vehicleIndex === -1) {
            return res.status(404).json({ error: 'Vehicle not found' })
        }
        user.vehicles.splice(vehicleIndex, 1)
        await user.save()
        res.status(200).json({ message: 'Vehicle deleted successfully' })
    } catch (error) {
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
    resetPassword,
    changePassword,
    editProfile,
    addVehicle,
    deleteVehicle,
}
