const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    min: 1 
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  drivers_license: {
    type: String,
    minlength: 5,
  },
  drivers_ins: {
    type: String,
    minlength: 1,
  },
  address: {
    type: String,
    minlength: 5,
  },

  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'Vehicle'
  }],
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
  
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
