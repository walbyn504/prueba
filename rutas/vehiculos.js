const express = require('express');
const router = express.Router();

const {
    crearVehiculo,
    editarVehiculo,
    eliminarVehiculo
} = require('../controladores/vehiculo');

//Post Method
router.post('/vehiculo', crearVehiculo)

// Editar vehículo por ID
router.put('/vehiculo/:id', editarVehiculo);

// Eliminar vehículo por ID
router.delete('/vehiculo/:id', eliminarVehiculo);


module.exports = router;