const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const Employee = require('../models/Employee')
const Company = require('./../models/Company')
const jwt = require('jsonwebtoken')
const getAllEmployees = async (req, res) => {
    try {
        let {page, limit} = req.query

      
            const employees = await Employee.aggregate([
               
                {
                    $lookup: {
                        from: "companies",
                        localField: "company",
                        foreignField: "_id",
                        as: "company"
                    }
                },
                {
                    $unwind: "$company"
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        phone_number: 1,
                        other_data: 1,
                        username: 1,
                        isCompanyAdmin: 1,
                        company: {
                            _id: "$company._id",
                            name: "$company.name"
                        }
                    }
                }
            ]);
            
            const employeesCount = await Employee.countDocuments();
          
            res.status(200).json({
                employees: employees,
                total: employeesCount,
              
            });


    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}
const getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.employeeId
        const employee = await Employee.findById(employeeId).populate('company', '_id name');
        if (!employee) {
            return res.status(404).json({error: 'Employee not found'})
        }
        res.status(200).json({employee: employee})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const updatedData = req.body
      
        const employee = await Employee.findByIdAndUpdate(employeeId, updatedData, { new: true });

        if (!employee) {
            return res.status(404).json({error: 'Employee not found'})
        }

        res.status(200).json({employee: employee})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const employee = await Employee.findByIdAndDelete(employeeId)
        if (!employee) {
            return res.status(404).json({error: 'Employee not found'})
        }
        res.status(200).json({message: 'Employee deleted successfully'})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const makeAdmin = async (req, res) => {
    try {
        const {employeeId} = req.params
        const employee = await Employee.findById(employeeId)

        if (!employee) {
            return res.status(404).json({error: 'Employee not found'})
        }

        employee.isCompanyAdmin = true
        await employee.save()

        res.status(200).json({
            message: 'Employee has been made admin successfully',
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}
const removeAdmin = async (req, res) => {
    try {
        const {employeeId} = req.params
        const employee = await Employee.findById(employeeId)

        if (!employee) {
            return res.status(404).json({error: 'Employee not found'})
        }

        employee.isCompanyAdmin = false
        await employee.save()

        res.status(200).json({
            message: 'Employee has been removed admin privilage successfully',
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}


const editCompany = async (req, res) => {
    try {
        console.log("hello hello")
        const companyId = req.params.companyid
        const updatedData = req.body
        const employee = await Company.findByIdAndUpdate(companyId, updatedData)
        if (!employee) {
            return res.status(404).json({error: 'Company not found'})
        }

        res.status(200).json({employee: employee})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}
const getEmployeesByCompany = async (req, res) => {
    try {
        const companyId = req.params.companyId
        const employees = await Employee.find({company: companyId})
        res.status(200).json(employees)
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
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
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const createEmployee = async (req, res) => {
    try {
        // console.log("reached here")
        // Check if the user making the request is a company admin
        // if (req.user.type !== 'companyadmin' && req.user.type !== 'superadmin') {
        //     return res.status(403).json({
        //         error: 'Permission denied. Only company admins can create employees.',
        //     })
        // }

        const {name, phone_number, other_data, username, password, company} =
            req.body

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10)

        // check if the username exists 

        // const existingEmployee = await Employee.findOne({ username: username });
        // if (existingEmployee) {
        //     return res.status(400).json({
        //         error: 'Username already exists. Please choose a different username.',
        //     });
        // }
        const newEmployee = new Employee({
            name,
            phone_number,
            other_data,
            username,
            password: hashedPassword,
            company,
        })
        await newEmployee.save()

        res.status(202).json({message: 'Employee created successfully'})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body

        // const employee = await Employee.findOne({username})
        const employee = await Employee.aggregate([
            { $match: { username: username} },
            {
                $lookup: {
                    from: "companies", // Assuming "companies" is the name of your company collection
                    localField: "company",
                    foreignField: "_id",
                    as: "company"
                }
            },
            { $unwind: "$company" },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    phone_number: 1,
                    other_data: 1,
                    username: 1,
                    password : 1,
                    isCompanyAdmin: 1,
                    company: {
                        _id: "$company._id",
                        name: "$company.name" // Include only the fields you want from the company
                    }
                }
            }
        ]);

        if (!employee || !(await bcrypt.compare(password, employee[0].password))) {
            return res.status(401).json({error: 'Invalid credentials'})
        }

        // Employee authenticated, generate a token
        const token = jwt.sign(
            {employeeId: employee._id, type: 'employee'},
            process.env.COMPANY_TOKEN_SECRET,
            {
                expiresIn: '1h', // Token expires in 1 hour, adjust as needed
            }
        )

        res.json({token : token , employee : employee[0]})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const logout = async (req, res) => {
    try {
        res.json({message: 'Logout successful'})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

// '/employeeExist/:username/:company' 

const usernameExists = async (req , res) => {
    try{
        const {username , company} = req.params
        const existingEmployee = await Employee.findOne({ username: username });
        if (existingEmployee) {
            return res.status(400).json({
                error: 'Username already exists. Please choose a different username.',
            });
        }
        res.status(200).send("Ok")
    }catch(err){

    }
}
const toggleAdmin = async (req, res) => {
   

    try {
        const id = req.params.id;
        // Find the employee by ID
        const employee = await Employee.findById(id);

        // Check if the employee exists
        if (!employee) {
            return res.status(404).send({ message: "Employee not found" });
        }

        // Toggle the isCompanyAdmin field
        employee.isCompanyAdmin = !employee.isCompanyAdmin;

        // Save the updated employee
        await employee.save();

        // Send a success response
        res.send({ message: "Admin status toggled successfully", employee });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).send({ message: "An error occurred while toggling admin status" });
    }
};

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
    logout,
    usernameExists,
    toggleAdmin
}
