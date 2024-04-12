const BoloProcess = require("./../models/boloProcess");
const fs = require('fs')

const getAll = async (req, res) => {
 try {
    const boloProcesses = await BoloProcess.find({});
    res.status(200).json(boloProcesses);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};

const getById = async (req, res) => {
 try {
    const boloProcess = await BoloProcess.findById(req.params.id);
    if (!boloProcess) {
      return res.status(404).json({ message: "BoloProcess not found" });
    }
    res.status(200).json(boloProcess);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};


const create = async (req, res) => {
 const boloProcess = new BoloProcess(req.body);
 try {
    const savedBoloProcess = await boloProcess.save();
    res.status(201).json(savedBoloProcess);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

const update = async (req, res) => {
 try {
    const updatedBoloProcess = await BoloProcess.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBoloProcess) {
      return res.status(404).json({ message: "BoloProcess not found" });
    }
    res.status(200).json(updatedBoloProcess);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

const deleteBoloProcess = async (req, res) => {
 try {
    const deletedBoloProcess = await BoloProcess.findByIdAndDelete(req.params.id);
    if (!deletedBoloProcess) {
      return res.status(404).json({ message: "BoloProcess not found" });
    }
    res.status(200).json({ message: "BoloProcess deleted successfully" });
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};



const getBankSlip = async (req, res) => {
  try{
   const boloProcess = await BoloProcess.findById(req.params.id);
   if (!boloProcess || !boloProcess.bankSlip.path) {
       return res.status(404).send('No image found');
   }

   // Assuming boloProcess.bankSlip.path contains the path to the file on your computer
   const filePath = boloProcess.bankSlip.path;

   fs.readFile(filePath, (err, data) => {
       if (err) {
           console.error(err);
           return res.status(500).send('Error reading file');
       }

       // Set the content type of the response
       res.contentType(boloProcess.bankSlip.contentType);

       // Send the file data as a response
       res.status(200).send(data);
   });
  }catch(err){
   console.log(err)
   res.status(500).send("internal server error")
  }
};



module.exports = {
    deleteBoloProcess,
    update,
    create,
    getById,
    getAll,
    getBankSlip

}