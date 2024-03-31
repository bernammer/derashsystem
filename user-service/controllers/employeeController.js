const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const Employee = require('../models/Employee')

const createEmployee = async (req, res) => {
    try {
        // Check if the user making the request is a company admin
        if (req.user.type !== 'companyadmin') {
            return res
                .status(403)
                .json({
                    error: 'Permission denied. Only company admins can create employees.',
                })
        }

        const { name, phone_number, other_data, username, password, company } =
            req.body

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10)

        const newEmployee = new Employee({
            name,
            phone_number,
            other_data,
            username,
            password: hashedPassword,
            company,
        })
        await newEmployee.save()

        res.status(201).json({ message: 'Employee created successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const employee = await Employee.findOne({ username })

        if (!employee || !(await bcrypt.compare(password, employee.password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // Employee authenticated, generate a token
        const token = jwt.sign(
            { employeeId: employee._id, type: 'employee' },
            process.env.COMPANY_TOKEN_SECRET,
            {
                expiresIn: '1h', // Token expires in 1 hour, adjust as needed
            }
        )

        res.json({ token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const logout = async (req, res) => {
    try {
        res.json({ message: 'Logout successful' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    createEmployee,
    login,
}
