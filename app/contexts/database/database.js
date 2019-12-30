const databaseConfig = require('../../config/database');
const mongoose = require('mongoose');
const {todoSchema,listSchema} =  require('./schma');
const {db_logs} = require('../../contexts/logs')
//Connection
const db = mongoose.connect(databaseConfig.url).catch((err)=>{
    db_logs(err);
});

//Models
const todo = mongoose.model('Todo',todoSchema);
const list = mongoose.model('List',listSchema);

module.exports = {
    Todo : todo,
    List : list
}
