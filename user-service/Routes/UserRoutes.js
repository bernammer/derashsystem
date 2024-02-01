// routes/userRoutes.js
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const express = require('express');
const passport = require('../config/passport');
const User = require('../models/User');

const router = express.Router();


router.post('/login', passport.authenticate('local'), userController.login);
router.get('/:userId', userController.getUserById);
router.put('/:userId/verify', userController.verifyUser);
router.post('/:userId/vehicles', authenticateToken, userController.updateVehicles);
router.post('/logout', authenticateToken, userController.logout);
  
  
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
      
    }
  );
  
  
// Logins

  router.post('/superadmin/login', async (req, res) => {
    
  });

  router.post('/superadmin/logout', authenticateToken, async (req, res) => {
    
  });


  router.post('/users/login', async (req, res) => {
    
  });
  
  router.post('/users/logout', authenticateToken, async (req, res) => {
    
  });


  router.post('/employees/login', async (req, res) => {
    
  });

  router.post('/employees/logout', authenticateToken, async (req, res) => {
    
  });


module.exports = router;
