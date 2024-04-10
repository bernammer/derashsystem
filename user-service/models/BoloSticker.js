// notificatin when policy end date < 30
const mongoose = require('mongoose')

const boleSticker = new  mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    type : String,
    endDate : Date,
    plateNumber : String,
    capacity : String,
    receiptNumber : String,
    examinationNumber : String
    
    
})



const BoloSticker = mongoose.model('BoloSticker', boleSticker)
module.exports = BoloSticker

// notificatin when policy end date < 30