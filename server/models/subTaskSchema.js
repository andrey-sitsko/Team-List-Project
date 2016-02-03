var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    subTaskSchema;

subTaskSchema = new Schema({
    title: String,
    done: Boolean
});

module.exports = subTaskSchema;
