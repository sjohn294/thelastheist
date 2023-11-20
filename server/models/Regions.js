// Charlotte, Atlanta, Miami

const { Schema, model } = require('mongoose');


const regionSchema = new Schema({
  id: {
    type: Number,
    required: true,
    min: 1 
  },
  location: {
    type: String,
    required: true,
  },
  users: [
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

  vehicles: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Vehicles'
  }]

 
});

const Region = model('Region', regionSchema);

module.exports = Region;

// type Region {
//   id: ID
//   location: String
//   users: [User]
//   vehicles: [Vehicle]
// }

// region:[Region]

// singleRegion(id:ID, location:String!): Region

// allRegions: [Region]

// .populate('Regions').sort({ location: 1 })