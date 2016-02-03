var mongoose = require('mongoose'),
    subTask = require('./subTaskSchema'),
    Schema = mongoose.Schema,
    taskSchema;

taskSchema = new Schema({
  title: String,
  dueDate: Date,
  done: Boolean,
  subtasks: [subTask]
});

module.exports = taskSchema;
