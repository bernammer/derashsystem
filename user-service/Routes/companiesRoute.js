const express = require('express')
const router = express.Router()


const companyController = require('../controllers/companyController')

// Create a new company (Super Admin only)
router.get('/:id',companyController.getById)
router.get('/getAll',  companyController.getAllCompanies)
router.delete('/:id',  companyController.deleteCompany)
router.put('/:id' , companyController.updateCompany)




module.exports = router
