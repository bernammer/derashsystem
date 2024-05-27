const express = require('express')
const router = express.Router()


const mengedFundController = require('../controllers/mengedFundSticker')

// Create a new company (Super Admin only)
router.get('/mengedFund', mengedFundController.getAll)
router.get('/mengedFund/:id',  mengedFundController.getById)  
router.post('/mengedFund' , mengedFundController.create)
router.delete('/mengedFund/:id',  mengedFundController.deleteSticker)
router.put('/mengedFund/:id' , mengedFundController.update)



module.exports = router







