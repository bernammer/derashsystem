// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    phone_number: String,
    password: String,
    driverLicense: String,
    city: String,
    country: String,
    houseNumber: String,
    residentAddress: String,
    birthdate: Date,
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
