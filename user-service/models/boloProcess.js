// notificatin when policy end date < 30
const mongoose = require('mongoose')

const boloProcess = new  mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, 
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }, 
    user :  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    libre : {type : mongoose.Schema.Types.ObjectId , ref : 'Libre'},
    insurance : {type : mongoose.Schema.Types.ObjectId , ref : 'InsuranceSticker'},
    inspection : { type : mongoose.Schema.Types.ObjectId , ref : 'InspectionTest'},
    mengedFundTransport : { type : mongoose.Schema.Types.ObjectId , ref : "MengedFund"},
    type: {
        type: String,
        enum: ['BoloServiceProvider', 'Bank', 'InsuranceProcess' , 'PostOffice' , "MengedTransport" , "Finished"],
        required: true,
        default: 'InsuranceProcess',
    },
    bankSlip: {
        path: String,
        contentType: String
    },
    insurancePaid : String,
    everythingPaid : String
    

},{
    timestamps: true
})



const BoloProcess = mongoose.model('BoloProcess', boloProcess)
module.exports = BoloProcess











































































// notificatin when policy end date < 









































































