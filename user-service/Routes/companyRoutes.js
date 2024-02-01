const express = require('express');
const router = express.Router();
const { createCompanyValidationRules, validate } = require('../middlewares/validationMiddleware');
const authenticateToken = require('../middlewares/authenticateToken');
const companyController = require('../controllers/companyController');

// Create a new company (Super Admin only)
router.post('/', authenticateToken, createCompanyValidationRules, validate, companyController.createCompany);

 

module.exports = router;
