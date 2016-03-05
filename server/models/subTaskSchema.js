var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    subTaskSchema;

subTaskSchema = new Schema({
  listId: String,
  taskId: String,
  title: String,
  id: String
});

subTaskSchema.set('versionKey', false);

module.exports = subTaskSchema;
