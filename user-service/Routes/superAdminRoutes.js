const express = require('express');
const router = express.Router();
const { createSuperAdminValidationRules, validate } = require('../middlewares/validationMiddleware');
const authenticateToken = require('../middlewares/authenticateToken');
const superAdminController = require('../controllers/superAdminController');

// Super admin registration
router.post('/register', createSuperAdminValidationRules, validate, superAdminController.register);

// Super admin login
router.post('/login', superAdminController.login);

// Logout super admin
router.post('/logout', authenticateToken, superAdminController.logout);

 // Create a new company (Super Admin only)
router.post('/company/', authenticateToken, createCompanyValidationRules, validate, companyController.createCompany);



module.exports = router;
