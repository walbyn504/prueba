const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({

    marca: {
        type: String,
        required: true
    },

    modelo: {
        type: String,
        required: true
    },

    anno: {
        type: Number,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    estado: {
        type: String,
        enum: ['disponible', 'vendido'],
        default: 'disponible'
    }

});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);