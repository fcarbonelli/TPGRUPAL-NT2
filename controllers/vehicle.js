const Vehicle = require('../models/vehicle');

const vehicleController = {
    createVehicle: async (req, res) => {

        const vehicle = new Vehicle(req.body);
        if (!vehicle) {
            return res.status(400).json({ success: false, code: 400, message: 'Error creating Vehicle' })
        }
        try {
            await vehicle.save();
            res.status(201).json({ success: true, message: "Vehicle created successfully", vehicle });
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    }, 
    getVehicles: async (req,res) => {

    },
    getVehicle: (req, res) => {
        res.json(req.vehicle);
    },
    updateVehicle: (req, res) => {
        
    },
    deleteVehicle: async (req, res) => {
        try {
            await req.vehicle.remove()
            res.json(req.vehicle);
        } catch (e) {
            res.status(401).json(e);
        }
    }
}

module.exports = vehicleController