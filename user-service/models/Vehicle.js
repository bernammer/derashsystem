// models/User.js
const mongoose = require('mongoose')

// Define the possible values for the 'type' field


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

     status: {
        type: String,
        enum: ['BoloIssued', 'BankPayed', 'InsuranceProcessStarted' , "PostOfficeSubmitted" , "MengedTransportSubmitted"],
        required: true,
    },
    licensedCapacity: {
        seats: Number,
        kg: Number,
        liter: Number,
    },
    insurancePaymentPrediction : Number
})

module.exports = mongoose.model('Vehicle', vehicleSchema)


