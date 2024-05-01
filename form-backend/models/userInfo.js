const mongoose = require('mongoose');
 
const userInfo = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String, 
  email: String,
});

const User = mongoose.model("User", userInfo)

module.exports = User