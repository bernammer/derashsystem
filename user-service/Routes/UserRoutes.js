// routes/userRoutes.js
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const express = require('express')
const passport = require('../config/passport')
const User = require('../models/User')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isSuperAdmin = require('../middlewares/isSuperAdmin')
const userController = require("./../controllers/userController")
const router = express.Router()

router.post('/login', userController.login)
router.get('/:userId', isLoggedIn, userController.getUserById)
router.put('/:userId/verify', isSuperAdmin, userController.verifyUser)
router.post('/:userId/vehicles', isLoggedIn, userController.updateVehicles)
router.post('/logout', isLoggedIn, userController.logout)
router.post('/register', userController.register)
// router.post('/forgot-password', userController.forgotPassword)
router.post('/reset-password', userController.resetPassword)
router.post('/change-password', isLoggedIn, userController.changePassword)
router.post('/edit-profile', isLoggedIn, userController.editProfile)
router.post('/add-vehicle', isLoggedIn, userController.addVehicle)
router.post('/delete-vehicle', isLoggedIn, userController.deleteVehicle)

module.exports = router
