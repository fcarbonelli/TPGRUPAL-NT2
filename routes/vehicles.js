const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle');

// AUTH




// CREAR VEHICULO (POST)
router.post('/vehicles', vehicleController.createVehicle);
// TODOS LOS VEHICULOS (GET ALL)
router.get('/vehicles', vehicleController.getVehicles);
// TRAER UN VEHICULO (GET)
router.get('/vehicles/:id', vehicleController.getVehicle);
// VEHICULO (UPDATE)
router.put('/vehicles/:id', vehicleController.updateVehicle);
// VEHICULO (DELETE)
router.delete('/vehicles/:id', vehicleController.deleteVehicle);

module.exports = router;
