const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SuperAdmin = require('../models/SuperAdmin')
const Company = require('../models/Company')
const User = require('./../models/User')
const Vehicle = require("../models/Vehicle")
const express = require('express')
const router = express.Router()
const {
    createSuperAdminValidationRules,
    validate,
} = require('../middlewares/validationMiddleware')
const authenticateToken = require('../middlewares/authenticateToken')
const superAdminController = require('../controllers/superAdminController')

const getAllUsers = async ( req , res ) => {
    try {
        const users = await User.find({});
        const userCount = await User.countDocuments();
        res.status(200).json({
            users: users,
            total: userCount
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })  
    }
}

const getUserById = async (req , res) => {
    try{
        const id = req.params.id
        const user = await User.findById(id);
        res.status(200).json({user: user});
    }catch(err){
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })  
    }
}


const register = async (req, res) => {
    try {
        const { firstName, lastName, phone_number, username, password } =
            req.body

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10)

        const newSuperAdmin = new SuperAdmin({
            firstName,
            lastName,
            phone_number,
            username,
            password: hashedPassword,
        })
        await newSuperAdmin.save()

        res.status(201).json({ message: 'Super admin created successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await SuperAdmin.findOne({ username })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        console.log( "login token " +  process.env.SUPER_TOKEN_SECRET)
        // User authenticated, generate a token
        const token = jwt.sign(
            { userId: user._id, type: 'superadmin' },
            process.env.SUPER_TOKEN_SECRET,
            {
                expiresIn: '1h', // Token expires in 1 hour, adjust as needed
            }
        )

        res.json({ token : token , user : user})
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
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

const createCompany = async (req, res) => {
    
        try {
            // console.log("hello there")
            // // Check if the user making the request is a super admin
            // if (req.user.type !== 'superadmin') {
            //     return res.status(403).json({
            //         error: 'Permission denied. Only super admins can create companies.',
            //     })
            // }

            const { name, location, type } = req.body

            const newCompany = new Company({ name, location, type })
            await newCompany.save()

            res.status(201).json({ message: 'Company created successfully' , company : newCompany })
        } catch (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        }

}

const getAllVehicles = async (req , res , next)=>{

        try { 
                const vehicles = await Vehicle.find({});
                const vehicleCount = await Vehicle.countDocuments();
                res.status(200).json({
                    vehicles: vehicles,
                    total: vehicleCount,
                });
    
        } catch (err) {
            console.error(err)
            res.status(500).json({error: 'Internal server error'})
        }
 
}

module.exports = {
    register,
    login,
    logout,
    createCompany,
    getAllVehicles,
    getAllUsers,
    getUserById
}
