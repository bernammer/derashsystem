const express = require('express')
const router = express.Router()


const inspectionTestController = require('../controllers/inspectionTestController')

// Create a new company (Super Admin only)
router.get('/inspectiontests',inspectionTestController.getAll)
router.get('/inspectiontest/:id',  inspectionTestController.getById)
router.post('/inspectiontest' , inspectionTestController.create)
router.delete('/inspectiontest/:id',  inspectionTestController.deleteInspection)
router.put('/inspectiontest/:id' , inspectionTestController.update)



module.exports = router







