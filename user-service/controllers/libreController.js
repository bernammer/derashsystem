const Libre = require("./../models/libre")


const uploadPhoto = async (req, res) => {
    try {
     
        // Find the existing BoloProcess document by ID
        const librephoto = await Libre.findById(req.params.id);
        if (!librephoto) {
            return res.status(404).send('user not found');
        }
       
        // Update the bankSlip field with the new image data

        librephoto.photo = {
            path: req.files.photo.path,
            contentType: ""
        };

        // Save the updated document
        await librephoto.save();

        res.status(200).json(librephoto);
    } catch (err) {
        res.status(500).send(err);
    }
};


const getAll = async(req , res) => {
    try {
        const libres = await Libre.find();
        res.status(200).send({libre : libres});
     } catch (err) {
        res.status(500).json({ message: err.message });
     }
}
  

 
const getById = async(req , res) => {
    try {
        let id = req.params.id
        let libre = await Libre.findById(id);
        if (libre == null) {
          return res.status(404).json({ message: 'Cannot find libre ' });
        }
        res.status(200).send({ libre : libre})
     } catch (err) {
        return res.status(500).json({ message: err.message });
     }
 }
 
 
 
 const create = async(req , res) => {
    const {
        vehicle,
        user,
        se,
        date
        
    } = req.body
  
   
    try {
        const newLibre = new Libre({
            vehicle,
            user,
            se,
            annualVehicleInspectionInformation : [new Date(date)]
          
         });
       const libre = await newLibre.save();

   
       if (!libre) {
           return res.status(404).send('user not found');
       }
      
       // Update the bankSlip field with the new image data

       libre.photo = {
           path: req.files.photo.path,
           contentType: ""
       };

       // Save the updated document
       await libre.save();

  
       res.status(201).json({ libre : libre});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
 
const update = async(req , res) => {

   
    try {
        let id = req.params.id
        const updatedData = req.body
        const newDate = updatedData.date
         // Remove the date from updatedData if it exists
        if (newDate) {
            delete updatedData.date;
        }
        
         // Initialize update object with the rest of the updatedData
         let update = {
            ...updatedData
        };

        if (newDate) {
            update.$push = { annualVehicleInspectionInformation: new Date(newDate) };
        }

       const libre = await Libre.findByIdAndUpdate(id, update, { new: true });
       res.status(200).json({ libre : libre});
    } catch (err) {
       res.status(400).json({ message: err.message });
    }
}
 
const deleteLibre = async (req , res) => {
    try {
        const id = req.params.id
        const libre = await Libre.findByIdAndDelete(id)
        if (!libre) {
            return res.status(404).json({error: 'libre  not found'})
        }
        res.status(200).json({message: 'libre deleted succesfully'})
    } catch (err) {
       res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getById,
    getAll,
    create,
    deleteLibre,
    update,
    uploadPhoto
}