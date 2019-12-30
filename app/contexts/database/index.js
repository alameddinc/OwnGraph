const {database: index} = require('../../config');
const mongoose = require('mongoose');

//Connection
const db = mongoose.connect(index.url);

//Schemas
// Yeni Eklenecek Modellerin Schema dosyaları eklenmelidir.
const {todoModel, listModel} = require('./models');

//Models
// Yeni Eklenecek Modeller alta eklenmelidir.
const todo = mongoose.model('Todo', todoModel);
const list = mongoose.model('List', listModel);

module.exports = {
    Todo: todo,
    List: list
}
