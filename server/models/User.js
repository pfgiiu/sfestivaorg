// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Remova o campo 'code' se não for mais necessário
  // code: {
  //   type: String,
  //   required: true
  // }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
