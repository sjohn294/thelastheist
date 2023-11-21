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

const Regions = model('Regions', regionSchema);

module.exports = Regions;