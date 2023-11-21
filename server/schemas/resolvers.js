const {User, Vehicle, Regions} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {

  Query: {

    // Fetch all users
    allUsers: async () => {
      return await User.find({}).sort({ name: 1 }).populate('Vehicles').sort({ make: 1 }).sort({ model: 1 });
    },
    

    // Fetch a single user by name
    singleUser: async (parent, { arg }) => {
      return User.findOne({arg}).populate('Vehicles').sort({ make: 1 }).sort({ model: 1 });
    },


    // Fetch all vehicles
    allVehicles: async () => {
      return await Vehicle.find().sort({ make: 1 }).sort({ model: 1 }).populate('users').sort({ name: 1 }).populate('Regions').sort({ location: 1 });
    },


    singleVehicle: async (parent, { arg }) => {
      return await Vehicle.find({arg}).populate('users').sort({ name: 1 }).populate('Regions').sort({ location: 1 });
    },


    // Fetch a single Region
    singleRegion: async (parent, { arg }) => {
      return await Regions.findOne({ arg }).populate('users').sort({ name: 1 }).populate('Vehicles').sort({ make: 1 }).sort({ model: 1 });
    },


    // Fetch all Regions
    allRegions: async () => {
      return await Regions.find().populate('users').populate('users').sort({ name: 1 }).populate('Vehicles').sort({ make: 1 }).sort({ model: 1 });
    },


       // Fetch the current authenticated user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }


      throw new AuthenticationError('Not Authenticated');
    }

  },

  Mutation: {

    // Create a new user
    addUser: async (parent,  { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
      
    },

    // Authenticate a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a new vehicle
    addVehicle: async (parent, { vehicleData }, context) => {
      if (context.user) {
        const vehicle = await Vehicle.create(vehicleData);
        return vehicle;
      }

      throw new AuthenticationError('You need to be logged in!');

    },

    // Update a vehicle
    // updateVehicle: async (parent, { vehicleId, vehicleData }, context) => {
    //   if (context.user) {
    //     const updatedVehicle = await Vehicle.findOneAndUpdate(
    //       { _id: vehicleId },
    //       { ...vehicleData },
    //       { new: true, runValidators: true }
    //     );
// 
    //     if (!updatedVehicle) {
    //       throw new Error('Vehicle not found');
    //     }
// 
    //     return updatedVehicle;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // // Delete a vehicle
    // deleteVehicle: async (parent, { vehicleId }, context) => {
    //   if (context.user) {
    //     const vehicleToDelete = await Vehicle.findOneAndDelete({ _id: vehicleId });
// 
    //     if (!vehicleToDelete) {
    //       throw new Error('Vehicle not found');
    //     }
// 
    //     return vehicleToDelete;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

  },
  
};

module.exports = resolvers;
