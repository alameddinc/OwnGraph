const {Schema} = require('mongoose');

const listModel = new Schema({
    id: String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: String,
    status: Boolean,
    created_at: Date,
    updated_at: Date
});

module.exports = listModel
