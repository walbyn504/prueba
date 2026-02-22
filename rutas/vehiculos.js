const express = require('express');
const router = express.Router();

const {
    crearVehiculo,
    editarVehiculo,
    eliminarVehiculo,
    marcarVendido
} = require('../controladores/vehiculo');

//Post Method
router.post('/vehiculo', crearVehiculo)

// Editar vehículo por ID
router.put('/vehiculo/:id', editarVehiculo);

// Eliminar vehículo por ID
router.delete('/vehiculo/:id', eliminarVehiculo);

// Cambiar a vendido
router.patch('/vehiculo/vendido/:id', marcarVendido);

module.exports = router;