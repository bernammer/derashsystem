const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const Company = require('../models/Company')

const getInfo = async (req, res) => {
    try {
const { id } = req.query
        let users = await Company.findOne({ id: id })
        if (!users)
            return res.status(400).json({ error: 'company doesnt exist' })
        res.status(201).json({ data: users })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    getInfo,
    login,
}
