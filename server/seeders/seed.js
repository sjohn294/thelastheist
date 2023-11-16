const db = require('../config/connection');
const {Vehicle} = require('../models');
const carSeeds = require('./vehicleSeeds.json');
const carDB = require('./carDB');


db.once('open', async () => {
  await carDB('Vehicle', 'cars');

  await Vehicle.insertMany(carSeeds)


  console.log('all done!');
  process.exit(0);
});
