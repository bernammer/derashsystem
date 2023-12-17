// models/User.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    plateNumber: String,
    chassisNumber: String,
    engineNumber: String,
    vehicleType: String,
    titleCertificateBookNumber: String,
    licensedCapacity: {
        seats: Number,
        kg: Number,
        liter: Number,
    },
});

const userSchema = new mongoose.Schema({
    username: String,
    fullName: String,
    password: String,
    driverLicense: Object,
    vehicles: [vehicleSchema],
    adminVerification: {
        status: {
            type: String,
            enum: ['PENDING', 'APPROVED', 'REJECTED'],
            default: 'PENDING',
        },
        adminId: String,
        adminName: String,
        verificationDate: Date,
    },
});

module.exports = mongoose.model('User', userSchema);
