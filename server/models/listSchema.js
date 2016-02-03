var mongoose = require('mongoose'),
    task = require('./taskSchema'),
    Schema = mongoose.Schema,
    listSchema;

listSchema = new Schema({
    title: String,
    id: String,
    tasks: [task]
});

module.exports = listSchema;
