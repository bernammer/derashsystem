// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    phone_number: String,
    password: String,
    houseNumber: String,
    nationality :String,
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    subCity : String,
    wereda : String,
    // seledaNumber : String,
    // previousSeledaNumber : String,
    birthdate: Date,
    inspectionDate : Date,
    // vehicles: [],
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
    adminVerification: {
        status: {
            type: String,
            enum: ['PENDING', 'APPROVED', 'REJECTED'],
            default: 'PENDING',
        },
        admin: { adminId: String, adminName: String, verificationDate: Date },
    },
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
