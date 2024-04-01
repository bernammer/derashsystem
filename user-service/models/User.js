// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    phone_number: String,
    password: String,
    driverLicense: String,
    vehicles: [],
    adminVerification: {
        status: {
            type: String,
            enum: ['PENDING', 'APPROVED', 'REJECTED'],
            default: 'PENDING',
        },
        admin: { adminId: String, adminName: String, verificationDate: Date },
    },
})

module.exports = mongoose.model('User', userSchema)
