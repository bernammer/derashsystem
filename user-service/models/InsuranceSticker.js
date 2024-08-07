const mongoose = require('mongoose')

const stickerSchema = new  mongoose.Schema({
    photo: {
        path: String,
        contentType: String
    },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    policyNo : String,
    policyStartDate : Date,
    policyEndDate : Date,
    issuedDate : Date,
    type: {
        type: String,
        enum: ['Full', 'Half', '3rdPartyInsurance'],
        required: true,
        default: 'Half',
    }   
},{
    timestamps: true
})



const InsurranceSticker = mongoose.model('InsuranceSticker', stickerSchema)
module.exports = InsurranceSticker

// notificatin when policy end date < 30