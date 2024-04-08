// routes/userRoutes.js
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const express = require('express')
const passport = require('../config/passport')
const User = require('../models/User')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isSuperAdmin = require('../middlewares/isSuperAdmin')
const userController = require('./../controllers/userController')
const router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)

router.post('/add-vehicle', isLoggedIn, userController.addVehicle)
router.delete('/delete-vehicle', isLoggedIn, userController.deleteVehicle)
router.put('/:userId/vehicles', isLoggedIn, userController.updateVehicles)
router.post('/logout', isLoggedIn, userController.logout)
router.put('/:userId/verify', isSuperAdmin, userController.verifyUser)
router.get('/:userId', isLoggedIn, userController.getUserById)
router.put('/:userId/change-password', isLoggedIn, userController.changePassword)
router.put('/:userId/edit-profile', isLoggedIn, userController.editProfile)
// [ [ [ [ ] ] ] ]



// router.post('/forgot-password', userController.forgotPassword)
router.post('/reset-password', userController.resetPassword)




module.exports = router
