const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SuperAdmin = require('../models/SuperAdmin');

const register = async (req, res) => {
    try {
        const { firstName, lastName, phone_number, username, password } = req.body;
  
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const newSuperAdmin = new SuperAdmin({
          firstName,
          lastName,
          phone_number,
          username,
          password: hashedPassword,
        });
        await newSuperAdmin.save();
  
        res.status(201).json({ message: 'Super admin created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        const user = await SuperAdmin.findOne({ username });
    
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // User authenticated, generate a token
        const token = jwt.sign({ userId: user._id, type: 'superadmin' }, 'jwtsecret', {
          expiresIn: '1h', // Token expires in 1 hour, adjust as needed
        });
    
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

const logout = async (req, res) => {
    try {
        
        res.json({ message: 'Logout successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
};


module.exports = {
  register,
  login,
  logout,
  
};
