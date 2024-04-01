// models/User.js
const mongoose = require('mongoose')

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
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
