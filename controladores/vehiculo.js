
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
        res.header('Location', `/vehiculo/${vehiculoCreado._id}`);
        res.status(201).json(vehiculoCreado);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const editarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findById(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }
        vehiculo.marca = req.body.marca || vehiculo.marca;
        vehiculo.modelo = req.body.modelo || vehiculo.modelo;
        vehiculo.anio = req.body.anio || vehiculo.anio;
        vehiculo.precio = req.body.precio || vehiculo.precio;

        const vehiculoActualizado = await vehiculo.save();
        res.json(vehiculoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
};
