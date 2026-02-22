const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/ticoAuto');
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});


const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));


//routes
app.use('/api', require('./rutas/vehiculos'));


//start the app
app.listen(3001, () => console.log(`UTN API service listening on port 3001!`))