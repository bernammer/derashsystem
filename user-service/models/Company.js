const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: String,
    type: { type: String, required: true } // inspection service provider, post office, insurance service provider
    //admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' } // reference to the admin user for this company
  });
  const Company = mongoose.model('Company', companySchema);
  module.exports = Company;
