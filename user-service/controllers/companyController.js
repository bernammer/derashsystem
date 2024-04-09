const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

const Company = require('./../models/Company')
const jwt = require('jsonwebtoken')


const getAllCompanies = async (req, res) => {
    try { 
            const companies = await Company.find({});
            if (!companies) {
                return res.status(404).json({error: 'Employee not found'})
            }   
            const companiesCount = await Company.countDocuments();
            res.status(200).json({
                employees: employees,
                total: companiesCount,
            });

    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}
const getById = async (req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId)
        if (!company) {
            return res.status(404).json({error: 'Employee not found'})
        }
        res.status(200).json({company: company})
    } catch (err) {
        console.error(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

const updateCompany = async (req, res) => {
    try {
        const comapnyId = req.params.id
        const updatedData = req.body
      
        const company = await Company.findByIdAndUpdate(comapnyId, updatedData, { new: true });

        if (!company) {
            return res.status(404).json({error: 'Company not found'})
        }

        res.status(200).json({company: company})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id
        const employee = await Company.findByIdAndDelete(companyId)
        if (!employee) {
            return res.status(404).json({error: 'Company not found'})
        }
        res.status(200).json({message: 'Company deleted successfully'})
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}


module.exports = {
    deleteCompany,
    updateCompany,
    getAllCompanies,
    getById
}
