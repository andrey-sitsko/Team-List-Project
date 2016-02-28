var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    taskSchema;

taskSchema = new Schema({
  title: String,
  id: String,
  listId: String,
  deadline: Date,
  done: Boolean
});

taskSchema.set('versionKey', false);

module.exports = taskSchema;
