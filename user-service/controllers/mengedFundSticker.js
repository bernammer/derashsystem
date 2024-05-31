const MengedFund = require("./../models/MengedFund.js")

const getAll = async(req , res) => {
    try {
        const mengedFundSticker = await MengedFund.find({}).populate('vehicle').populate('company')
        res.status(200).send({stickers : mengedFundSticker});
     } catch (err) {
        res.status(500).json({ message: err.message });
     }
}
  

 
const getById = async(req , res) => {
    try {
        let id = req.params.id
        let mengedFundSticker = await MengedFund.findById(id);
        if (mengedFundSticker == null) {
          return res.status(404).json({ message: 'Cannot find menged fund Sticker' });
        }
        res.status(200).send({ sticker : mengedFundSticker})
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
        const mengedFund = new MengedFund({
            vehicle,
            company,
            type,
            endDate : new Date(endDate),
            plateNumber,
            capacity,
            receiptNumber,
            examinationNumber
         });
       const newMengedFund = await mengedFund.save();
       res.status(201).json({ sticker : newMengedFund});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
 
const update = async(req , res) => {

   
    try {
        let id = req.params.id
        const updatedData = req.body
       const sticker = await MengedFund.findByIdAndUpdate(id, updatedData, { new: true });
       res.status(200).json({ sticker : sticker});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
const deleteSticker = async (req , res) => {
    try {
        const id = req.params.id
        const mengedfund = await MengedFund.findByIdAndDelete(id)
        if (!mengedfund) {
            return res.status(404).json({error: 'Menged Fund Sticker not found'})
        }
        res.status(200).json({message: 'Menged Fund  sticker deleted succesfully'})
    } catch (err) {
       res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getById,
    getAll,
    create,
    deleteSticker,
    update
}