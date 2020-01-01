const {Schema} = require('mongoose');

const todoModel = new Schema({
    id: String,
    title: { type: String, required: true },
    status: Boolean,
    listId: String,
    created_at: Date,
    updated_at: Date
});

module.exports = todoModel
