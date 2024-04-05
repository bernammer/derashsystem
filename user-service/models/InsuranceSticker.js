const mongoose = require('mongoose')

const stickerSchema = new  mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    policyNo : String,
    policyStartDate : Date,
    policyEndDate : Date,
    issuedDate : Date
    
})

const InsurranceSticker = mongoose.model('InsuranceSticker', stickerSchema)
module.exports = InsurranceSticker
