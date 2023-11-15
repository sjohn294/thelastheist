const db = require('../config/connection');
const { User, Car} = require('../models');
const userSeeds = require('./userSeeds.json');
const carSeeds = require('./carSeeds.json');
const carDB = require('./carDB');

db.once('open', async () => {
  try {
    await carDB('Car', 'cars');

    await carDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < carSeeds.length; i++) {
      const { _id, carOwner } = await Car.create(carSeeds[i]);
      const user = await User.findOneAndUpdate(
        { name: carOwner },
        {
          $addToSet: {
            cars: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
