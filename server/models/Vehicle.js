const { Schema, model } = require('mongoose');


const vehicleSchema = new Schema({
  id: {
    type: Number,
    required: true,
    min: 1 
  },
  make: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  
    size: {
      type: String,
      require:true,
      
  },
  type:{
    type: String,
      require:true,
      
  },
  doors: {
    type: Number,
    required: true,
    min: 1 
  },
  fuel_type: {
    type: String,
    required: true,
    trim: true
  },
  mpg: {
    type: Number,
    required: true,
    min: 0 
  },
  range: {
    type: Number,
    required: true,
    min: 1
  },
  passenger_capacity: {
    type: Number,
    required: true,
    min: 1
  },
  transmission: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  regions: [{
    type: Schema.Types.ObjectId,
    ref: 'regions'
   
  }]

 
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;

