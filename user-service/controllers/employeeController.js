const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const Employee = require('../models/Employee')
const Company = require('./../models/Company')
const getAllEmployees = (req, res) => {
    try {
        const { page, limit } = req.query

        if (!page && !limit) {
            Employee.find({})
                .then((employees) => {
                    res.status(200).json({ employees: employees })
                })
                .catch((err) => {
                    console.error(err)
                    res.status(500).json({ error: 'Internal server error' })
                })
        } else {
            if (page < 1) page = 1
            if (limit > 100) limit = 100

            const skip = (page - 1) * limit

            Employee.find({})
                .skip(skip)
                .limit(limit)
                .then((employees) => {
                    Employee.countDocuments().then((count) => {
                        res.status(200).json({
                            employees: employees,
                            totalPages: Math.ceil(count / limit),
                            currentPage: page,
                        })
                    })
                })
                .catch((err) => {
                    console.error(err)
                    res.status(500).json({ error: 'Internal server error' })
                })
        }
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
const getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.id
        const employee = await Employee.findById(employeeId)
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' })
        }
        res.status(200).json({ employee: employee })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const updatedData = req.body
        const employee = await Employee.findByIdAndUpdate(
            employeeId,
            updatedData
        )
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' })
        }

        res.status(200).json({ employee: employee })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const employee = await Employee.findByIdAndDelete(employeeId)
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' })
        }
        res.status(200).json({ message: 'Employee deleted successfully' })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const makeAdmin = async (req, res) => {
    try {
        const { employeeId } = req.params
        const employee = await Employee.findById(employeeId)

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' })
        }

        employee.isCompanyAdmin = true
        await employee.save()

        res.status(200).json({
            message: 'Employee has been made admin successfully',
        })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
const removeAdmin = async (req, res) => {
    try {
        const { employeeId } = req.params
        const employee = await Employee.findById(employeeId)

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' })
        }

        employee.isCompanyAdmin = false
        await employee.save()

        res.status(200).json({
            message: 'Employee has been made admin successfully',
        })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
const editCompany = async (req, res) => {
    try {
        const companyId = req.params.id
        const updatedData = req.body
        const employee = await Company.findByIdAndUpdate(companyId, updatedData)
        if (!employee) {
            return res.status(404).json({ error: 'Company not found' })
        }

        res.status(200).json({ employee: employee })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
const getEmployeesByCompany = async (req, res) => {
    try {
        const companyId = req.params.companyId
        const employees = await Employee.find({ company: companyId })
        res.status(200).json(employees)
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getAdminsByCompany = async (req, res) => {
    try {
        const companyId = req.params.companyId
        const admins = await Employee.find({
            company: companyId,
            isCompanyAdmin: true,
        })
        res.status(200).json(admins)
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const createEmployee = async (req, res) => {
    try {
        // Check if the user making the request is a company admin
        if (req.user.type !== 'companyadmin') {
            return res.status(403).json({
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
    getAllEmployees,
    getEmployeeById,
    removeAdmin,
    makeAdmin,
    deleteEmployee,
    updateEmployee,
    editCompany,
    getEmployeesByCompany,
    getAdminsByCompany,
    logout
}
