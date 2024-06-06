const InspectionTest = require("./../models/inspectionTest")
const User = require("./../models/User")
const getAll = async(req , res) => {
    try {
        const inspectionTest = await InspectionTest.find().populate('vehicle') // This populates the 'vehicle' field
        .populate('user');
        res.status(200).send({inspectiontest : inspectionTest});
     } catch (err) {
        res.status(500).json({ message: err.message });
     }
}
  

 
const getById = async(req , res) => {
    try {
        let id = req.params.id
        let inspectiontest = await InspectionTest.findById(id).populate('vehicle') // This populates the 'vehicle' field
        .populate('user');
        if (inspectiontest == null) {
          return res.status(404).json({ message: 'inspection test not found' });
        }
        res.status(200).send({ inspectiontest : inspectiontest})
     } catch (err) {
        return res.status(500).json({ message: err.message });
     }
 }
 
 
 
 const create = async(req , res) => {
  
   
    try {
        const {
            user,
            vehicle,
            brakeForce,
            parkingForce,
            axleLoad,
            brakeEfficiency,
            brakeDifference,
            parkingBrakeEfficiency,
            parkingBrakeDifference,
            sideSlip,
            totalParkingEfficiency,
            totalBrakeEfficiency,
            totalHandBrakeEfficiency,
            suspensionEfficiency,
            suspensionDifference,
            highBeanIntensity,
            offsetLRofFarLight,
            offsetLRofNearLight,
            offsetUDofFarLight,
            offsetUDofNearLight,
            hc,
            co,
            lambda,
            co2,
            o2,
            no
         } = req.body;
      
        const inspection = new InspectionTest({
            user,
            vehicle,
            brakeForce,
            parkingForce,
            axleLoad,
            brakeEfficiency,
            brakeDifference,
            parkingBrakeEfficiency,
            parkingBrakeDifference,
            sideSlip,
            totalParkingEfficiency,
            totalBrakeEfficiency,
            totalHandBrakeEfficiency,
            suspensionEfficiency,
            suspensionDifference,
            highBeanIntensity,
            offsetLRofFarLight,
            offsetLRofNearLight,
            offsetUDofFarLight,
            offsetUDofNearLight,
            hc,
            co,
            lambda,
            co2,
            o2,
            no
         });
       const inspectionTest = await inspection.save();
    //    search the user
    const updatedUser = await User.findByIdAndUpdate(
        user,
        { inspectionDate: newInspectionDate },
        { new: true } // This option returns the updated document
    );
    
    if (!updatedUser) {
        res.status(400).json({ message: "user not found" });
        return;
    }
       res.status(201).json({ inspectionTest : inspectionTest});
    } catch (err) {
       res.status(500).json({ message: err.message });
    }
}
 
 
const update = async(req , res) => {

   
    try {
        let id = req.params.id
        const updatedData = req.body
        const inspectionTest = await InspectionTest.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ inspectionTest : inspectionTest});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
const deleteInspection = async (req , res) => {
    try {
        const id = req.params.id
        const bolo = await InspectionTest.findByIdAndDelete(id)
        if (!bolo) {
            return res.status(404).json({error: 'inspection test  not found'})
        }
        res.status(200).json({message: 'inspection deleted succesfully'})
    } catch (err) {
       res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getById,
    getAll,
    create,
    deleteInspection,
    update
}