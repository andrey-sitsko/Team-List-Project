var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    subTaskSchema;

subTaskSchema = new Schema({
  taskId: String,
  title: String,
  id: String
});

subTaskSchema.set('versionKey', false);

module.exports = subTaskSchema;
