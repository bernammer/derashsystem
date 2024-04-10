const express = require('express')
const router = express.Router()


const boloStickerController = require('../controllers/boloStickerController')

// Create a new company (Super Admin only)
router.get('/bolostickers',boloStickerController.getById)
router.get('/bolostickers/:id',  boloStickerController.getAll)
router.post('/bolostickers' , boloStickerController.create)
router.delete('/bolostickers/:id',  boloStickerController.deleteBolo)
router.put('/bolostickers/:id' , boloStickerController.update)



module.exports = router







