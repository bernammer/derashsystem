const express = require('express')
const router = express.Router()
const {
    createEmployeeValidationRules,
    validate,
} = require('./../middlewares/validationMiddleware')
const authenticateToken = require('../middlewares/authenticateToken')
const employeeController = require('./../controllers/employeeController')
const isCompanyAdmin = require('../middlewares/isCompanyAdmin')
const isEmployee = require('../middlewares/isEmployee')
const {authenticateAndAuthorize} = require("./../middlewares/companyOrSuperAdmin")
// // Create a new employee (Company Admin only)


router.post(
    '/create',
    // authenticateAndAuthorize,
    // validate(createEmployeeValidationRules),
    employeeController.createEmployee,
)

// Login
router.post('/login',
    employeeController.login,
)

// Logout
router.post('/logout',
    // isEmployee,
    employeeController.logout,
)

// Get all employees of a company
router.get('/',
    employeeController.getAllEmployees,
)

// Get a single employee by ID
router.get('/:employeeId',
    employeeController.getEmployeeById,
)

//make an employee an admin
router.put(
    '/:employeeId/make-admin',
    // authenticateAndAuthorize,
    employeeController.makeAdmin
)

// Update an employee
router.put('/:id',
    // isEmployee,
    employeeController.updateEmployee
)

// Delete an employee
router.delete('/:id',
    // authenticateAndAuthorize,
    employeeController.deleteEmployee
)

//remove admin status from an employee
router.put(
    '/:employeeId/remove-admin',
    // authenticateAndAuthorize,
    employeeController.removeAdmin
)

/*

[[[[]]]]
*/

// Get all employees of a company
router.get(
    '/company/:companyId',
    // authenticateAndAuthorize,
    employeeController.getEmployeesByCompany
)

// Get all employees of a company
router.get(
    '/company/:companyId/admins',
    // authenticateAndAuthorize,
    employeeController.getAdminsByCompany
)

// edit company of an employee
router.put(
    '/:companyid/edit-company',
    // authenticateAndAuthorize,
    employeeController.editCompany
)




module.exports = router
