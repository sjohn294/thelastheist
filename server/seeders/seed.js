const db = require('../config/connection');
const {Vehicle, User, Regions,} = require('../models');
const carSeeds = require('./vehicleSeeds.json');
const regionSeeds = require('./regionSeeds.json')
const userSeeds = require('./userSeeds.json')
const carDB = require('./carDB');


db.once('open', async () => {
  try{
    
  await carDB('Vehicle', 'cars');

  await carDB('User', 'users');

  await carDB('Regions', 'regions');

  await Vehicle.insertMany(carSeeds)
  await Regions.insertMany(regionSeeds)
  await User.insertMany(userSeeds)

  // await User.create(userSeeds);

  // for (let i = 0; i < thoughtSeeds.length; i++) {
  //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
  //   const user = await User.findOneAndUpdate(
  //     { username: thoughtAuthor },
  //     {
  //       $addToSet: {
  //         thoughts: _id,
  //       },
  //     }
  //   );
  // }
} catch (err) {
  console.error(err);
  process.exit(1);
}

console.log('all done!');
process.exit(0);
});
