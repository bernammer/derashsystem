const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const Employee = require('../models/Employee')
const User = require('./../models/User')
const Company = require('./../models/Company')
const InsurranceSticker = require("./../models/InsuranceSticker")


const uploadPhoto = async (req, res) => {
    try {
     
        // Find the existing BoloProcess document by ID
        const insurance = await InsurranceSticker.findById(req.params.id);
        if (!insurance) {
            return res.status(404).send('user not found');
        }
      
        insurance.photo = {
            path: req.files.photo.path,
            contentType: ""
        };

        // Save the updated document
        await insurance.save();

        res.status(200).json(insurance);
    } catch (err) {
        res.status(500).send(err);
    }
};


const createSticker = async(req, res) => {
    try {
        const { vehicleId, companyId, policyNo, policyStartDate, policyEndDate, issuedDate, type } = req.body;
        // Ensure companyId is an array, even if it's a single element
       
        const insuranceSticker = new InsurranceSticker({
            vehicle: vehicleId,
            company: companyId, // Use the array of companyIds
            policyNo,
            policyStartDate : new Date(policyStartDate),
            policyEndDate :  new Date(policyEndDate),
            issuedDate :  new Date(issuedDate),
            type
        });
        await insuranceSticker.save();

        if (!insuranceSticker) {
            return res.status(404).send('user not found');
        }
      
        insuranceSticker.photo = {
            path: req.files.photo.path,
            contentType: ""
        };

        // Save the updated document
        await insuranceSticker.save();

        res.status(200).json(insuranceSticker);

     
    } catch (err) {
        console.error(err); // Corrected typo from 'error' to 'err'
        res.status(500).json({ error: err});
    }
};
// 1 month

async function enhanceWithUser(stickers) {
    const userPromises = stickers.map(async (sticker) => {
        const user = await User.findOne({ vehicles: { $in: [sticker.vehicle._id] } }).exec();
        return user ? { ...sticker.toObject(), user } : sticker.toObject();
    });

    const enhancedStickers = await Promise.all(userPromises);
    return enhancedStickers;
}



const getAllSticker = async (req, res) => {
    try {
        let { page, limit } = req.query;

        if (!page && !limit) {
            // Fetch all stickers along with their associated vehicle and company details
            const stickers = await InsurranceSticker.find({})
                .populate('vehicle') // Populate the 'vehicle' field
                .populate('company') // Populate the 'company' field
                .populate('vehicle');
            // Enhance stickers with user information
        const enhancedStickers = await enhanceWithUser(stickers);

      
        const cleanedStickers = enhancedStickers.map(sticker => {
            delete sticker.$isNew;
            delete sticker._doc;
            return sticker;
        });


        res.status(200).json({ stickers: cleanedStickers });

                    } else {
            if (page < 1) page = 1;
            if (limit > 100) limit = 100;

            const skip = (page - 1) * limit;

            // Fetch paginated stickers along with their associated vehicle and company details
            const stickers = await InsurranceSticker.find({})
                .skip(skip)
                .limit(limit)
                .populate('vehicle') // Populate the 'vehicle' field
                .populate('company'); // Populate the 'company' field

            // Count total documents
            const count = await InsurranceSticker.countDocuments();

            res.status(200).json({
                stickers: enhanceWithUser(stickers),
                totalPages: Math.ceil(count / limit),
                currentPage: page,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getStickerById = async (req, res) => {
    try {
        const id = req.params.id
        const sticker = await InsurranceSticker.findById(id) .populate('vehicle').populate('company')
        if (!sticker) {
            return res.status(404).json({ error: 'sticker not found' })
        }
        res.status(200).json({ sticker: sticker })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}



// the update shoudl update the array
const updateSticker = async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body; 
       console.log(id)
	 console.log(updatedData)
        let update = { ...updatedData };

        // Use findByIdAndUpdate with the prepared update object
        const sticker = await InsurranceSticker.findByIdAndUpdate(
            id,
            update,
            { new: true } // Return the updated document
        );

        if (!sticker) {
            return res.status(404).json({ error: 'Sticker not found' });
        }

        res.status(200).json({ sticker: sticker });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteSticker = async (req, res) => {
    try {
	    const  id   =  req.params.id;
	   console.log(`Attempting to delete sticker with ID: ${id}`);
const sticker = await InsurranceSticker.findByIdAndDelete(id);
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
    deleteSticker,
    uploadPhoto
}
