const express = require('express')
const router = express.Router()


const libreController = require('../controllers/libreController')

// Create a new company (Super Admin only)
router.get('/libres',libreController.getById)
router.get('/libres/:id',  libreController.getAll)
router.post('/libres' , libreController.create)
router.delete('/libres/:id',  libreController.deleteLibre)
router.put('/libres/:id' , libreController.update)
router.put('/upload-photo/:id' , libreController.uploadPhoto)


module.exports = router







