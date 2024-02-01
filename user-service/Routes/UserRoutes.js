// routes/userRoutes.js
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const express = require('express');
const passport = require('../config/passport');
const User = require('../models/User');
const SuperAdmin = require('../models/SuperAdmin');
const Company = require('../models/Company');
const Employee = require('../models/Employee');

const router = express.Router();


// Authentication
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
});


// Get user by ID
router.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update user by ID (for admin verification)
router.put('/users/:userId/verify', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { adminId, adminName, verificationStatus } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.adminVerification.status !== 'PENDING') {
            return res.status(400).json({ error: 'User is already verified or rejected.' });
        }

        user.adminVerification.status = verificationStatus;
        user.adminVerification.adminId = adminId;
        user.adminVerification.adminName = adminName;
        user.adminVerification.verificationDate = new Date();

        await user.save();

        res.status(200).json({ message: 'User verification status updated.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Sample code to handle add/remove vehicles
router.post('/users/:userId/vehicles', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { action, vehicles, vehicleIds } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (action === 'addVehicles') {
            // Add new vehicles
            user.vehicles.push(...vehicles);
        } else if (action === 'removeVehicles') {
            // Remove vehicles by ID
            user.vehicles = user.vehicles.filter(vehicle => !vehicleIds.includes(vehicle._id.toString()));
        } else {
            return res.status(400).json({ error: 'Invalid action.' });
        }

        await user.save();

        res.status(200).json({ message: 'Vehicles updated.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//Add vehicle
// Authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied. Token not provided.' });
  
    jwt.verify(token, 'jwtsecret', (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid token.' });
  
      req.user = user;
      next();
    });
  };
  
  // Validation middleware for request body
  const validate = (validations) => {
    return async (req, res, next) => {
      await Promise.all(validations.map((validation) => validation.run(req)));
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      res.status(422).json({ errors: errors.array() });
    };
  };
  
  // Super Admin Routes
  
  // Create a new super admin
  router.post(
    '/superadmins',
    validate([
      body('firstName').notEmpty().withMessage('First name is required'),
      body('lastName').notEmpty().withMessage('Last name is required'),
      body('phone_number').notEmpty().withMessage('Phone number is required'),
      body('username').notEmpty().withMessage('Username is required'),
      body('password').notEmpty().withMessage('Password is required'),
    ]),
    async (req, res) => {
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
    }
  );
  
  // Company Routes
  
  // Create a new company (Super Admin only)
  router.post(
    '/companies',
    authenticateToken,
    validate([
      body('name').notEmpty().withMessage('Company name is required'),
      body('location').optional(),
      body('type').notEmpty().withMessage('Company type is required'),
    ]),
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
  );
  
  // Employee Routes
  
  // Create a new employee (Company Admin only)
  router.post(
    '/employees',
    authenticateToken,
    validate([
      body('name').notEmpty().withMessage('Employee name is required'),
      body('phone_number').optional(),
      body('other_data').optional(),
      body('username').notEmpty().withMessage('Username is required'),
      body('password').notEmpty().withMessage('Password is required'),
      body('company').notEmpty().withMessage('Company ID is required'),
    ]),
    async (req, res) => {
      try {
        // Check if the user making the request is a company admin
        if (req.user.type !== 'companyadmin') {
          return res.status(403).json({ error: 'Permission denied. Only company admins can create employees.' });
        }
  
        const { name, phone_number, other_data, username, password, company } = req.body;
  
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const newEmployee = new Employee({
          name,
          phone_number,
          other_data,
          username,
          password: hashedPassword,
          company,
        });
        await newEmployee.save();
  
        res.status(201).json({ message: 'Employee created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  );
  
  // User Routes
  
  // Create a new user (Super Admin only)
  router.post(
    '/users',
    validate([
      body('username').notEmpty().withMessage('Username is required'),
      body('firstName').optional(),
      body('lastName').optional(),
      body('password').notEmpty().withMessage('Password is required'),
      body('driverLicense').optional(),
      body('vehicles').optional(),
    ]),
    async (req, res) => {
      try {
        // Check if the user making the request is a super admin
        // if (req.user.type !== 'superadmin') {
        //   return res.status(403).json({ error: 'Permission denied. Only super admins can create users.' });
        // }
        
  
        const { username, firstName, lastName, phone_number, password, driverLicense, vehicles } = req.body;
        
        if (!vehicles || vehicles.length === 0) {
            return res.status(400).json({ error: 'At least one vehicle information is required.' });
        }

        const newUser = new User({
          username,
          firstName,
          lastName,
          phone_number,
          password,
          driverLicense,
          vehicles,
          adminVerification: { status: 'PENDING' },
        });
        await newUser.save();
  
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  );


// Logins

  router.post('/superadmin/login', async (req, res) => {
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
  });

  router.post('/superadmin/logout', authenticateToken, async (req, res) => {
    try {
      // Optionally, you can perform additional actions during logout
      // For example, you might update the user's last logout timestamp in the database
  
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  router.post('/users/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // User authenticated, generate a token
      const token = jwt.sign({ userId: user._id, type: 'user' }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.post('/users/logout', authenticateToken, async (req, res) => {
    try {
      // Optionally, you can perform additional actions during logout
      // For example, you might update the user's last logout timestamp in the database
  
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  router.post('/employees/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const employee = await Employee.findOne({ username });
  
      if (!employee || !(await bcrypt.compare(password, employee.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Employee authenticated, generate a token
      const token = jwt.sign({ employeeId: employee._id, type: 'employee' }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post('/employees/logout', authenticateToken, async (req, res) => {
    try {
      // Optionally, you can perform additional actions during employee logout
      // For example, you might update the employee's last logout timestamp in the database
  
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;
