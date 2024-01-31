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
    firstName: String,
    lastName: String,
    phone_number: String,
    password: String,
    driverLicense: String,
    vehicles: [vehicleSchema],
    adminVerification: {
        status: {
            type: String,
            enum: ['PENDING', 'APPROVED', 'REJECTED'],
            default: 'PENDING',
        },
       admin: { adminId: String,
        adminName: String,
        verificationDate: Date,
       }
    },
});


module.exports = mongoose.model('User', userSchema);
