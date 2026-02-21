
const Vehiculo = require("../modelos/vehiculo");


const crearVehiculo = async (req, res) => {
    try {
        const vehiculo = new Vehiculo({
            marca: req.body.marca,
            modelo: req.body.modelo,
            anio: req.body.anio,
            precio: req.body.precio
        });

        const vehiculoCreado = await vehiculo.save();
        res.status(201).json(vehiculoCreado);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

