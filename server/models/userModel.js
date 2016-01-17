var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userSchema,
    userModel;

userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lists: [{
    title: String,
    id: String,
    tasks: [{
      title: String,
      dueDate: Date,
      done: Boolean,
      subtask: [{
        title: String,
        done: Boolean
      }]
    }]
  }]
});

userModel = mongoose.model('User', userSchema);

module.exports = userModel;
