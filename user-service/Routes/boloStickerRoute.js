const express = require('express')
const router = express.Router()


const boloStickerController = require('../controllers/boloStickerController')

// Create a new company (Super Admin only)
router.get('/bolostickers',boloStickerController.getAll)
router.get('/bolostickers/:id',  boloStickerController.getById)  
router.post('/bolostickers' , boloStickerController.create)
router.delete('/bolostickers/:id',  boloStickerController.deleteBolo)
router.put('/bolostickers/:id' , boloStickerController.update)



module.exports = router







