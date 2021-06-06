const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.js');

// CREAR VEHICULO (POST)
router.post('/vehicles', vehicleController.createVehicle);
// VEHICULO (GET)
router.get('/vehicles', vehicleController.getVehicles);
// VEHICULO (SHOW)
router.get('/vehicles/id', vehicleController.getVehicle);
// VEHICULO (UPDATE)
router.put('/vehicles/id', vehicleController.updateVehicle);
// VEHICULO (DELETE)
router.delete('/vehicles/id', vehicleController.deleteVehicle);

module.exports = router;
