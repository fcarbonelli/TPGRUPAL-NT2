const Vehicle = require('../models/vehicle');
const ObjectId = require('mongoose').Types.ObjectId;

const vehicleController = {
    
    createVehicle: async (req, res) => {
        const vehicle = new Vehicle(req.body);
        if (!vehicle) {
            return res.status(400).json({ success: false, code: 400, message: 'Error creating Vehicle' })
        }
        try {
            await vehicle.save();
            req.user.vehicles.push(vehicle);
            await req.user.save();
            res.status(201).json({ success: true, message: "Vehicle created successfully", vehicle });
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    }, 

    getVehicles: async (req, res) => {
        try {
            const vehicles = await Vehicle.find();
            if(!vehicles.length) {
                return res.status(404).json({ success: false, code: 404, message: 'Vehicles Not Found' });
            }
            res.json({ success: true, message: "Vehicles obtained successfully", vehicles });
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    },

    getVehicle: async (req, res) => {
        const _id = req.params.id;
        
        try {
            const vehicle = await Vehicle.findById(_id); 
            if(!vehicle) {
                return res.status(404).json({ success: false, code: 404, message: 'Vehicle Not Found' });
            }
            res.json({ success: true, message: "Vehicle obtained successfully", vehicle });
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    },

    updateVehicle: async (req, res) => {
        const _id = req.params.id;
        try {
            await Vehicle.updateOne({ _id: _id }, req.body);
            res.json({ success: true, message: "Vehicle updated successfully"});
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message });
        }
    },

    deleteVehicle: async (req, res) => {
        // Validar que el vehiculo le perteneza al usuario autenticado
        const _id = req.params.id;
        try {
            const vehicle = await Vehicle.findById(_id);
            if (!vehicle) {
                return res.status(404).json({ success: false, code: 404, message: 'Vehicle Not Found' });
            } 
            await vehicle.remove();
            req.user.vehicles = req.user.vehicles.filter((element) => _id !== new ObjectId(element).toString()); 
            await req.user.save();
            res.status(200).json({success: true, message: "Vehicle deleted successfully"});
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message });
        }

    }
}

module.exports = vehicleController