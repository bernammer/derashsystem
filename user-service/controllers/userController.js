const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Session = require("../models/Session")
const Vehicle = require('../models/Vehicle')
const BoloProcess = require('../models/boloProcess')
const saveImage = require("./../middlewares/saveImages")


const getAll = async (req , res) => {
    try{
     
        const user = await User.find().populate('vehicles');
        res.status(200).json(user)
    }catch(err){
        console.log(err)
		res.status(500).json({"error" : err})
    }
}


const getVehicleByPlate = async (req , res)=>{
	try{
		const {vehicleId} =  req.params;
		const vehicle = await Vehicle.findOne({plate : vehicleId})
		res.status(200).send(vehicle)
	}catch(err){
		console.log(err)
		res.status(500).json({"error" : err})
	}

}


const resetPassword = async (req, res) => {
    try {
        const { userId } = req.params
        const newPassword = ''
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { password: newPassword },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json({ message: 'Password reset successful' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const changePassword = async (req, res) => {
    try {
   
        const { userId } = req.params
        const { newPassword } = req.body

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { password: newPassword },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json({ message: 'Password updated successful' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const editProfile = async (req, res) => {
    try {
        const {userId} = req.params
        const updatedData = req.body
        const user = await User.findByIdAndUpdate(userId, updatedData)
        if (!user) {
            return res.status(404).json({ error: 'Employee not found' })
        }

        res.status(200).json({ user: user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addVehicle = async (req, res) => {
    try {
        const {
            userId,
            vehicleType,
            buildInCountry,
            vehicleModel,
            builtInYear,
            chassisNumber,
            motorNumber,
            bodyType ,
            color ,
            fuelType ,
            horsePower ,
            weight ,
            singleWeight ,
            capacity ,
            cc  ,
            cylinderQuantity ,
            allowedWorkType ,
            axleQuantity,
            plate ,
        } = req.body

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        } // Create a new vehicle document using the extracted data
        const newVehicle = new Vehicle({
            // userId,
            vehicleType,
            buildInCountry,
            vehicleModel,
            builtInYear: new Date(builtInYear),
            chassisNumber,
            motorNumber,
            bodyType ,
            color ,
            fuelType ,
            horsePower ,
            weight ,
            singleWeight ,
            capacity ,
            cc  ,
            cylinderQuantity ,
            allowedWorkType ,
            axleQuantity,
            plate ,
        })
        await newVehicle.save()

        const vehicleId = newVehicle._id
        user.vehicles.push(vehicleId)
        await user.save()
        res.status(200).json({ message: 'Vehicle added successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const { userId, vehicleId } = req.body
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const vehicleIndex = user.vehicles.findIndex(
            (v) => v._id.toString() === vehicleId
        )
        if (vehicleIndex === -1) {
            return res.status(404).json({ error: 'Vehicle not found' })
        }
        user.vehicles.splice(vehicleIndex, 1)
        await user.save()
        res.status(200).json({ message: 'Vehicle deleted successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const login = async (req, res) => {
    try {
        const { username, password , fcmToken } = req.body

        const user = await User.findOne({ username })
      
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // create the session for the firebase push notification 
        const session = await Session.create({
            user:  user._id, 
            fcmToken : fcmToken
        })

        // User authenticated, generate a token
        const token = jwt.sign(
            { userId: user._id, type: 'user' },
            process.env.USER_TOKEN_SECRET,
            {
                expiresIn: '1h', // Token expires in 1 hour, adjust as needed
            }
        )

        res.json({ token  , user : user})
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findById(userId).populate('vehicles');

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const verifyUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const { adminId, adminName, verificationStatus } = req.body

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        if (user.adminVerification.status !== 'PENDING') {
            return res
                .status(400)
                .json({ error: 'User is already verified or rejected.' })
        }

        user.adminVerification.status = verificationStatus
        user.adminVerification.adminId = adminId
        user.adminVerification.adminName = adminName
        user.adminVerification.verificationDate = new Date()

        await user.save()

        res.status(200).json({ message: 'User verification status updated.' })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const updateVehicles = async (req, res) => {
    try {
        const userId = req.params.userId
        const { action, vehicles } = req.body

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        if (action === 'addVehicles') {
            // Add new vehicles
            user.vehicles.push(...vehicles)
        } else if (action === 'removeVehicles') {
            // Remove vehicles by ID
            user.vehicles = user.vehicles.filter(
                (vehicle) => !vehicles.includes(vehicle._id.toString())
            )
        } else {
            return res.status(400).json({ error: 'Invalid action.' })
        }

        await user.save()

        res.status(200).json({ message: 'Vehicles updated.' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const logout = async (req, res) => {
    try {
        res.json({ message: 'Logout successful' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const register = async (req, res) => {
    try {
        const {
       
            username,
            firstName,
            lastName,
            phone_number,
            password,
            houseNumber,
            nationality,
            sex ,
            subCity ,
            wereda ,
            birthdate,
        } = req.body

        // if (!vehicles || vehicles.length === 0) {
        //     return res.status(400).json({
        //         error: 'At least one vehicle information is required.',
        //     })
        // }

          // Hash the password before storing it
          const hashedPassword = await bcrypt.hash(password, 10)



        const newUser = new User({
            username,
            firstName,
            lastName,
            phone_number,
            password : hashedPassword,
            houseNumber,
            nationality,
            sex ,
            subCity ,
            wereda ,
            birthdate :  new Date(birthdate),
            adminVerification: { status: 'PENDING' },
        })
        await newUser.save()

    
        if (!newUser) {
            return res.status(404).send('user not found');
        }
        console.log(req.files.photo.path)
        // Update the bankSlip field with the new image data

        newUser.idPhoto = {
            path: req.files.photo.path,
            contentType: ""
        };

        // Save the updated document
        await newUser.save();

       
                   // User authenticated, generate a token
                   const token = jwt.sign(
                    { userId: newUser._id, type: 'user' },
                    process.env.USER_TOKEN_SECRET,
                    {
                        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
                    }
                )
        res.status(201).json({ message: 'User created successfully'  , user : newUser , token : token})
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}


const uploadUserIdDocument = async (req, res) => {
    try {
        
        // Find the existing BoloProcess document by ID
        const user = await User.findById(req.params.id);
        
        console.log(user)
        if (!user) {
            return res.status(404).send('user not found');
        }
        console.log(req.files.photo.path)
        // Update the bankSlip field with the new image data

        user.idPhoto = {
            path: req.files.photo.path,
            contentType: ""
        };

        // Save the updated document
        await user.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};


const uploadBankSlip = async (req, res) => {
    try {
     
        // Find the existing BoloProcess document by ID
        const boloProcess = await BoloProcess.findById(req.params.id);
        if (!boloProcess) {
            return res.status(404).send('BoloProcess not found');
        }
        console.log(req.file.path)
        // Update the bankSlip field with the new image data
        boloProcess.bankSlip = {
            path: req.files.file.path,
            contentType: req.files.file.type
        };

        // Save the updated document
        await boloProcess.save();

        res.status(200).json(boloProcess);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getUserByUsername = async (req , res) =>{
    try {
        const username = req.params.username
        const user = await User.findById({username : username}).populate('vehicles');

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
module.exports = {
    login,
    getUserById,
    verifyUser,
    updateVehicles,
    logout,
    register,
    resetPassword,
    changePassword,
    editProfile,
    addVehicle,
    deleteVehicle,
    uploadBankSlip,
    getUserByUsername,
    getVehicleByPlate,
    getAll,
    uploadUserIdDocument
}
