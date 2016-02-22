var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    subTaskSchema;

subTaskSchema = new Schema({
    title: String,
    id: String
});

subTaskSchema.set('versionKey', false);

module.exports = subTaskSchema;
