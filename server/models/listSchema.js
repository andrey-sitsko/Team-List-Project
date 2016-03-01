var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    listSchema;

listSchema = new Schema({
    title: String,
    id: String
});

listSchema.set('versionKey', false);

module.exports = listSchema;
