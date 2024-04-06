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

// // Create a new employee (Company Admin only)
router.post(
    '/',
    isCompanyAdmin,
    validate(createEmployeeValidationRules),
    employeeController.createEmployee
)
// Get all employees of a company
router.get('/',  employeeController.getAllEmployees)
// Get a single employee by ID
router.get('/:employeeId', isEmployee, employeeController.getEmployeeById)
// Update an employee
router.put('/:employeeId', isEmployee, employeeController.updateEmployee)
// Delete an employee
router.delete('/:employeeId', isCompanyAdmin, employeeController.deleteEmployee)
//make an employee an admin
router.put(
    '/:employeeId/make-admin',
    isCompanyAdmin,
    employeeController.makeAdmin
)
//remove admin status from an employee
router.put(
    '/:employeeId/remove-admin',
    isCompanyAdmin,
    employeeController.removeAdmin
)
// edit company of an employee
router.put(
    '/:employeeId/edit-company',
    isCompanyAdmin,
    employeeController.editCompany
)
// Login
router.post('/login', employeeController.login)
// Logout
router.post('/logout', isEmployee, employeeController.logout)
// Get all employees of a company
router.get(
    '/company/:companyId',
    isCompanyAdmin,
    employeeController.getEmployeesByCompany
)
// Get all employees of a company
router.get(
    '/company/:companyId/admins',
    isCompanyAdmin,
    employeeController.getAdminsByCompany
)

module.exports = router
