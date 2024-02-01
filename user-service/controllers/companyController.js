const { validationResult } = require('express-validator');
const Company = require('../models/Company');

const createCompany = async (req, res) => {
    async (req, res) => {
        try {
          // Check if the user making the request is a super admin
          if (req.user.type !== 'superadmin') {
            return res.status(403).json({ error: 'Permission denied. Only super admins can create companies.' });
          }
    
          const { name, location, type } = req.body;
    
          const newCompany = new Company({ name, location, type });
          await newCompany.save();
    
          res.status(201).json({ message: 'Company created successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
};


module.exports = {
  createCompany,
};
