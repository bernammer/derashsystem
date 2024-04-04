const mongoose = require('mongoose')

const accidentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    location: String,
    size: { type: Number },
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
})

const Accidents = mongoose.model('Accidents', accidentSchema)
module.exports = Accidents
