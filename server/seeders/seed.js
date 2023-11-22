const db = require('../config/connection');
const { Vehicle, Regions, } = require('../models');
const carSeeds = require('./vehicleSeeds.json');
const regionSeeds = require('./regionSeeds.json')

const carDB = require('./carDB');


db.once('open', async () => {
  try {

    // const car1 = {
    //   location: "Atlanta",
    //     vehicles: [...allCars]
    //   }

    await carDB('Vehicle', 'cars');
    await Vehicle.insertMany(carSeeds)
    // const allCars = await Vehicle.find()
    // console.log(allCars)



    // await Regions.create(regionSeeds)
    // const allRegions = await Regions.find()
    // console.log(allRegions)

    // for (i = 0; i < allRegions.length; i++) {

    // }


    // await carDB('Regions', 'regions');



    // const car1 = {
    //   ...carSeeds[0],
    //   regions: [...allRegions]
    // }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});


// const db = require('../config/connection');
// const { Vehicle, Regions, } = require('../models');
// const carSeeds = require('./vehicleSeeds.json');
// const regionSeeds = require('./regionSeeds.json')
// const carDB = require('./carDB');


// db.once('open', async () => {
//   try {

//     await carDB('Regions', 'regions');
//     await Regions.insertMany(regionSeeds)
//     const allRegions = await Regions.find()

//     const car1 = {
//       ...carSeeds[0],
//       regions: [...allRegions]
//     }
//     await Vehicle.create(car1)
//     const blah = await Vehicle.findById("655d2650c3d1c2e855875d34").populate({

//       path: "Regions",

//       model: "Regions"
//     })
//     console.log(blah)






//     await carDB('Vehicle', 'cars');
//     await Vehicle.insertMany(carSeeds)

//     // await carDB('User', 'users');
//     // await User.insertMany(userSeeds)

//     // await User.create(userSeeds);

//     // for (let i = 0; i < thoughtSeeds.length; i++) {
//     //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//     //   const user = await User.findOneAndUpdate(
//     //     { username: thoughtAuthor },
//     //     {
//     //       $addToSet: {
//     //         thoughts: _id,
//     //       },
//     //     }
//     //   );
//     // }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });