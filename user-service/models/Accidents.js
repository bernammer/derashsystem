const mongoose = require('mongoose')

const accidentSchema = new Schema({

    location: String,
    involvedVehicles: [], //array of vehicle ids
    accidentType: {
        type: String,
        enum: ['Collision', 'Roll Over', 'Head-On'],
        required: true,
    },
    accidentSeverity: {
        type: String,
        enum: ['Collision', 'Roll Over', 'Head-On'],
        required: true,
    },
    photos: [],
    payment : Number
})

const Accidents = mongoose.model('Accidents', accidentSchema)
module.exports = Accidents
