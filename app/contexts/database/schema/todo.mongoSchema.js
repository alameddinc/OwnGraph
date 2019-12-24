const {Schema} = require('mongoose');

const todoSchema = new Schema({
    id: String,
    title: { type: String, required: true },
    status: Boolean,
    listId: String,
    created_at: Date,
    updated_at: Date
});

module.exports = {
    schema: todoSchema
}