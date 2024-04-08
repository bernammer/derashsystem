const express = require('express')
const router = express.Router()
const {
    createSuperAdminValidationRules,
    validate,
} = require('../middlewares/validationMiddleware')
const authenticateToken = require('../middlewares/authenticateToken')
const superAdminController = require('../controllers/superAdminController')
const companyController = require('./../controllers/superAdminController')

// Create a new company (Super Admin only)
router.post(
    '/company',
     // authenticateToken,
    // validate(createCompanyValidationRules),
    companyController.createCompany
)

// Super admin registration
router.post(
    '/register',
    // validate(createSuperAdminValidationRules),
    superAdminController.register
)

// Super admin login
router.post('/login',
    superAdminController.login
)

// Logout super admin
router.post('/logout',
    // authenticateToken,
    superAdminController.logout
)



module.exports = router
