var mongoose = require('mongoose'),
    task = require('./taskSchema'),
    Schema = mongoose.Schema,
    listSchema;

listSchema = new Schema({
    title: String,
    id: String,
    tasks: [task]
});

listSchema.set('versionKey', false);

module.exports = listSchema;
