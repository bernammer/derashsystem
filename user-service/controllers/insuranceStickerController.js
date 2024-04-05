const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const Employee = require('../models/Employee')
const Company = require('./../models/Company')
const InsurranceSticker = require("./../models/InsuranceSticker")


const createSticker = async(req , res) => {
    try {
        const { vehicleId, companyId, policyNo, policyStartDate, policyEndDate, issuedDate , type } = req.body;
        const insuranceSticker = new InsurranceSticker({ vehicleId, companyId, policyNo, policyStartDate, policyEndDate, issuedDate , type });
        await insuranceSticker.save();
        res.send(insuranceSticker);
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
// 1 month

const getAllSticker = (req, res) => {
    try {
        let { page, limit } = req.query

        if (!page && !limit) {
            InsurranceSticker.find({})
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

            InsurranceSticker.find({})
                .skip(skip)
                .limit(limit)
                .then((sticker) => {
                    InsurranceSticker.countDocuments().then((count) => {
                        res.status(200).json({
                            sticker: sticker,
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
const getStickerById = async (req, res) => {
    try {
        const {id} = req.query
        const sticker = await InsurranceSticker.findById(id)
        if (!sticker) {
            return res.status(404).json({ error: 'sticker not found' })
        }
        res.status(200).json({ sticker: sticker })
    } catch (err) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const updateSticker = async (req, res) => {
    try {
        const {id} =  req.query
        const updatedData = req.body
        const sticker = await InsurranceSticker.findByIdAndUpdate(
            id,
            updatedData
        )
        if (!sticker) {
            return res.status(404).json({ error: 'sticker not found' })
        }

        res.status(200).json({ sticker: sticker })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const deleteSticker = async (req, res) => {
    try {
        const { id } =  req.query;
        const sticker = await InsurranceSticker.findByIdAndDelete(id)
        if (!sticker) {
            return res.status(404).json({ error: 'sticker not found' })
        }
        res.status(200).json({ message: 'sticker deleted successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}



module.exports = {
    createSticker,
    getAllSticker, 
    getStickerById,
    updateSticker,
    deleteSticker
}
