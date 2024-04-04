// models/User.js
const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    plateNumber: String,
    chassisNumber: String,
    engineNumber: String,
    vehicleType: String,
    buildInCountry: String,
    builtInYear: Date,
    carModel: String,
    motorNumber: String,
    bodyType: String,
    color: String,
    gasType: String,
    motorHorsePower: Number,
    titleCertificateBookNumber: String,
    cc: String,
    cylinderNumber: String,
    allowedWork: String,
    axleQuantity: Number,
    licensedCapacity: {
        seats: Number,
        kg: Number,
        liter: Number,
    },
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
