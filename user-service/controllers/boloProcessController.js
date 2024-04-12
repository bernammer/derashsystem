const BoloProcess = require("./../models/boloProcess");


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

module.exports = {
    deleteBoloProcess,
    update,
    create,
    getById,
    getAll

}