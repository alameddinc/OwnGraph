const databaseConfig = require('../../config/database');
const mongoose = require('mongoose');
const {todoSchema,listSchema} =  require('./schema');

//Connection
const db = mongoose.connect(databaseConfig.url);

//Models
const todo = mongoose.model('Todo',todoSchema);
const list = mongoose.model('List',listSchema);

module.exports = {
    Todo : todo,
    List : list
}