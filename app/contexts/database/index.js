const {database: index} = require('../../config');
const mongoose = require('mongoose');

//Connection
const db = mongoose.connect(index.url);

//Schemas
// Yeni Eklenecek Modellerin Schema dosyaları eklenmelidir.
const {todoModel, listModel} = require('./templates');

//Models
// Yeni Eklenecek Modeller alta eklenmelidir.
const todo = mongoose.model('Todo', todoModel);
const list = mongoose.model('List', listModel);

/**
 * Dont use db when not critical times
 * @type {{Todo: Model, List: Model, db: Promise}}
 */
module.exports = {
    Todo: todo,
    List: list,
    db: db
}
