const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const vehicleController = require('../controllers/vehicle');



// CREAR VEHICULO (POST)
router.post('/vehicles', auth, vehicleController.createVehicle);
// TODOS LOS VEHICULOS (GET ALL)
router.get('/vehicles', vehicleController.getVehicles);
// TRAER UN VEHICULO (GET)
router.get('/vehicles/:id',  vehicleController.getVehicle);
// VEHICULO (UPDATE)
router.put('/vehicles/:id', auth, vehicleController.updateVehicle);
// VEHICULO (DELETE)
router.delete('/vehicles/:id', auth, vehicleController.deleteVehicle);

module.exports = router;
