const express = require('express');
const router = express.Router();
const { createEmployeeValidationRules, validate } = require('../middlewares/validationMiddleware');
const authenticateToken = require('../middlewares/authenticateToken');
const employeeController = require('../controllers/employeeController');

// Create a new employee (Company Admin only)
router.post('/', authenticateToken, createEmployeeValidationRules, validate, employeeController.createEmployee);

 

module.exports = router;
