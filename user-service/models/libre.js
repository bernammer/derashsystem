
const mongoose = require('mongoose')

const libreSchema = new  mongoose.Schema({
    photo: {
        path: String,
        contentType: String
    },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    se : String, 
    annualVehicleInspectionInformation : [Date], // array of dates
   
    
},{
    timestamps: true
})



const Libre = mongoose.model('Libre', libreSchema)
module.exports = Libre

