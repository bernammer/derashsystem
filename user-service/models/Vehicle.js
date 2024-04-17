// models/User.js
const mongoose = require('mongoose')

// Define the possible values for the 'type' field


const vehicleSchema = new mongoose.Schema({
    vehicleType: String,
    buildInCountry: String,
    vehicleModel: String,
    builtInYear: Date,
    chassisNumber: String,
    motorNumber: String,
    bodyType : String,
    color : String,
    fuelType : String,
    horsePower : String,
    weight : String,
    singleWeight : String,
    capacity : String,
    cc : String ,
    cylinderQuantity : String,
    allowedWorkType : String,
    axleQuantity: String,
    plate : String,
    status: {
        type: String,
        enum: ['BoloIssued', 'BankPayed', 'InsuranceProcessStarted' , "PostOfficeSubmitted" , "MengedTransportSubmitted"],
       
    },
   
    insurancePaymentPrediction : Number
},{
    timestamps: true
})

module.exports = mongoose.model('Vehicle', vehicleSchema)


