const express = require('express')
const router = express.Router()


const inspectionTestController = require('../controllers/inspectionTestController')

// Create a new company (Super Admin only)
router.get('/inspectiontests',inspectionTestController.getById)
router.get('/inspectiontest/:id',  inspectionTestController.getAll)
router.post('/inspectiontest' , inspectionTestController.create)
router.delete('/inspectiontest/:id',  inspectionTestController.deleteInspection)
router.put('/inspectiontest/:id' , inspectionTestController.update)



module.exports = router







