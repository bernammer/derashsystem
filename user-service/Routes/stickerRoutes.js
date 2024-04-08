const express = require('express')
const router = express.Router()
const stickerController = require('./../controllers/insuranceStickerController')


router.get('/:id',
    stickerController.getStickerById,
)

router.get('/getAll',
    stickerController.getAllSticker,
)

router.post('/create',
    stickerController.createSticker,
)

router.put('/:id',
    stickerController.updateSticker,
)

router.delete('/:id',
    stickerController.deleteSticker,
)

module.exports = router
