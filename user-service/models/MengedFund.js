// notificatin when policy end date < 30
const mongoose = require('mongoose')

const mengedFund = new  mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    type : String,
    endDate : Date,
    plateNumber : String,
    capacity : String,
    receiptNumber : String,
    examinationNumber : String

},{
    timestamps: true
})


const MengedFund = mongoose.model('MengedFund', mengedFund)
module.exports = MengedFund

// notificatin when policy end date < 30