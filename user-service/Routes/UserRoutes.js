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


// const multer = require('multer');
const fs = require('fs');
const path = require('path');


router.get("/allusers" , userController.getAll)


router.post('/register', userController.register)

router.post('/login', userController.login)


router.post('/add-vehicle',
    // isLoggedIn,
    userController.addVehicle
)

router.delete('/delete-vehicle',
    // isLoggedIn,
    userController.deleteVehicle
)

//getVehicleByPlate
//vehicleId

router.get('/search-vehicle/:vehicleId' , userController.getVehicleByPlate)


router.put('/:userId/vehicles',
    // isLoggedIn,
    userController.updateVehicles
)

router.post('/logout',
    // isLoggedIn,
    userController.logout
)

router.put('/:userId/verify',
    // isSuperAdmin,
    userController.verifyUser
)

router.get('/:userId',
    // isLoggedIn,
    userController.getUserById
)

router.get('/get-user/:username',
    // isLoggedIn,
    userController.getUserByUsername
)



router.put('/:userId/change-password',
    // isLoggedIn,
    userController.changePassword
)

router.put('/:userId/edit-profile',
    // isLoggedIn,
    userController.editProfile
)


// router.post('/forgot-password', userController.forgotPassword)
router.post('/reset-password', userController.resetPassword)


// Define the storage directory
const storageDir = path.join(__dirname, '../storage/temp');

// Check if the directory exists, if not, create it
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
}

router.put('/upload-bank-slip/:id' , userController.uploadBankSlip)


router.put('/upload-id/:id' , userController.uploadUserIdDocument)



module.exports = router
