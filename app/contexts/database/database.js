const databaseConfig = require('../../config/database');
const mongoose = require('mongoose');

//Connection
const db = mongoose.connect(databaseConfig.url);

//Schemas
// Yeni Eklenecek Modellerin Schema dosyaları eklenmelidir.
const todoSchema =  require('./schema/todo.mongoSchema');
const listSchema =  require('./schema/list.mongoSchema');

//Models
// Yeni Eklenecek Modeller alta eklenmelidir.
const todo = mongoose.model('Todo',todoSchema);
const list = mongoose.model('List',listSchema);

module.exports = {
    Todo : todo,
    List : list
}