const mongoose = require('mongoose')

// Define the possible values for the 'type' field
const companyTypes = [
    'inspection service provider',
    'post office',
    'Insurance companies',
    'Traffic Management office',
    'Menged Trasport',
]

// Define the schema for social media accounts

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: String,
    size: { type: Number },
    socialMediaAccounts: [
        {
            platform: String,
            url: String,
        },
    ],
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    type: { type: String, enum: companyTypes, required: true }, // Using enum for the 'type' field
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }, // reference to the admin user for this company
    // companymahtemphoto
},{
    timestamps: true
})
const Company = mongoose.model('Company', companySchema)
module.exports = Company

// Insurance history
// insurance post performance(kirs) rate , endet calculate endemiyaregu
