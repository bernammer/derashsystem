const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone_number: String,
    other_data: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isCompanyAdmin: { type: Boolean, default: false },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }
  });
  
  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;