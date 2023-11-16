const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
      // enum: ['Compact', 'Midsize', 'Fullsize','Subcompact'], 
  },
  type:{
    type: String,
      require:true,
      // enum: ['SUV', 'Sedan', 'Truck','Hatchback','Coupe','Wagon','Van','Minivan'], 

  },
  doors: {
    type: Number,
    required: true,
    min: 1 
  },
  fuel_type: {
    type: String,
    required: true,
    // enum: ['petrol', 'diesel', 'electric', 'hybrid'], 
    trim: true
  },
  mpg: {
    type: Number,
    required: true,
    min: 0 // 
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
    // enum: ['manual', 'automatic', 'semi-automatic'], 
    trim: true
  },
 
 
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  //   get: timestamp => dateFormat(timestamp)
  // },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: timestamp => dateFormat(timestamp)
  //     }
  //   }
  // ]
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;
