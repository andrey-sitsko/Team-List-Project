var mongoose = require('mongoose'),
    list = require('./listSchema'),
    Schema = mongoose.Schema,
    userSchema;

userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lists: [list]
});

module.exports = mongoose.model('User', userSchema);
