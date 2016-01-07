var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userSchema,
    userModel;

userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

userModel = mongoose.model('User', userSchema);

module.exports = userModel;
