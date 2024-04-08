// notificatin when policy end date < 30
const mongoose = require('mongoose')

const stickerSchema = new  mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    policyNo : String,
    endDate : Date,
    policyEndDate : Date,
    issuedDate : Date,
    type: {
        type: String,
        enum: ['Full', 'Half', '3rdPartyInsurance'],
        required: true,
        default: 'Half',
    }
    
    
})



const BoloSticker = mongoose.model('BoloSticker', stickerSchema)
module.exports = BoloSticker

// notificatin when policy end date < 30