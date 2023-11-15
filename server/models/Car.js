const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const carSchema = new Schema({
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
  doors: {
    type: Number,
    required: true,
    min: 1 
  },
  passengerCount: {
    type: Number,
    required: true,
    min: 
  },
  transmission: {
    type: String,
    required: true,
    enum: ['manual', 'automatic', 'semi-automatic'], 
    trim: true
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['petrol', 'diesel', 'electric', 'hybrid'], 
    trim: true
  },
  mpg: {
    type: Number,
    required: true,
    min: 0 // 
  },
  isPetFriendly: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
      },
      commentAuthor: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
    }
  ]
});

const Car = model('Car', carSchema);

module.exports = Car;
