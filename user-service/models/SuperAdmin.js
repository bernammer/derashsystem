const mongoose = require('mongoose');


const superAdminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone_number: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
  module.exports = SuperAdmin;

