const BoloSticker = require("./../models/BoloSticker.js")
const User = require('./../models/User')

async function enhanceWithUser(stickers) {
    const userPromises = stickers.map(async (sticker) => {
        const user = await User.findOne({ vehicles: { $in: [sticker.vehicle._id] } }).exec();
        return user ? { ...sticker.toObject(), user } : sticker.toObject();
    });

    const enhancedStickers = await Promise.all(userPromises);
    return enhancedStickers;
}


const getAll = async(req , res) => {
    try {
        const bolostickers = await BoloSticker.find({}).populate('vehicle').populate('company');

        const enhancedStickers = await enhanceWithUser(bolostickers);

      
        const cleanedStickers = enhancedStickers.map(sticker => {
            delete sticker.$isNew;
            delete sticker._doc;
            return sticker;
        });


        res.status(200).send({stickers : cleanedStickers});
     } catch (err) {
        res.status(500).json({ message: err.message });
     }
}
  

 
const getById = async(req , res) => {
    try {
        let id = req.params.id
        let bolosticker = await BoloSticker.findById(id);
        if (bolosticker == null) {
          return res.status(404).json({ message: 'Cannot find Bolo Sticker' });
        }
        res.status(200).send({ bolosticker : bolosticker})
     } catch (err) {
        return res.status(500).json({ message: err.message });
     }
 }
 
 
 
 const create = async(req , res) => {
    const {
        vehicle,
        company,
        type,
        endDate,
        plateNumber,
        capacity,
        receiptNumber,
        examinationNumber
    } = req.body
  
   
    try {
        const bolosticker = new BoloSticker({
            vehicle,
            company,
            type,
            endDate : new Date(endDate),
            plateNumber,
            capacity,
            receiptNumber,
            examinationNumber
         });
       const newBoloSticker = await bolosticker.save();
       res.status(201).json({ bolo : newBoloSticker});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
 
const update = async(req , res) => {

   
    try {
        let id = req.params.id
        const updatedData = req.body
       const bolo = await BoloSticker.findByIdAndUpdate(id, updatedData, { new: true });
       res.status(200).json({ data : bolo});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
const deleteBolo = async (req , res) => {
    try {
        const id = req.params.id
        const bolo = await BoloSticker.findByIdAndDelete(id)
        if (!bolo) {
            return res.status(404).json({error: 'Bolo Sticker not found'})
        }
        res.status(200).json({message: 'Bolo sticker deleted succesfully'})
    } catch (err) {
       res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getById,
    getAll,
    create,
    deleteBolo,
    update
}