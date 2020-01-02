/**
 *  OwnGraph V1
 */

const {path} = require('../../config')
const {Todo: TodoModel} = require(path.databaseFolder)
const {db_logs} = require('../../contexts/logs')
const Promise = require('promise')

/**
 * Create Function
 * @param data
 * @returns {Promise<*>}
 */
const createTodo = async (data) => {
    try {
        const list = new TodoModel({
            id: Math.random().toString(36).substr(2, 10),
            status: true,
            ...data
        });
        return await list.save();
    } catch (e) {
        return `Todo Create error: ${e.message}`;
    }
}

/**
 * Remove Function
 * @param id
 * @returns {Promise<string>}
 */
const removeTodo = async (id) => {
    try {
        const listDeleted = await TodoModel.deleteOne({id: id});
        console.log(listItem)
        if (!listItem.deletedCount)
            return `${id} could not be found!`

        return `${id} removed!`;
    } catch (e) {
        return db_logs(`Todo remove error: ${e.message}`);
    }
}

/**
 * Search Function
 * @param inputId
 * @returns {Promise<*|string>}
 */
const findInTodo = async (inputId) => {
    try {
        return await TodoModel.findOne({id: inputId});
    } catch (e) {
        return db_logs(`Todo find error: ${e.message}`);
    }
}

/**
 * Update Function
 * @param findId
 * @param data
 * @returns {Promise<*|string>}
 */
const listUpdate = async (findId, data) => {
    try {
        return await TodoModel.findOneAndUpdate({id: findId}, data, {new:true});
    } catch (e) {
        return db_logs(`Todo update error: ${e.message}`);
    }
}

/**
 *
 * @type {{
 * createTodo: (function(*=): Promise<*>),
 * removeTodo: (function(*=): Promise<string>),
 * listUpdate: (function(*=, *=): Promise<*|string>),
 * findInTodo: (function(*=): Promise<*|string>)
 * }}
 */
module.exports = {
    createTodo: (inputData) => createTodo(inputData),
    removeTodo: (inputId) => removeTodo(inputId),
    listUpdate: (inputId, inputData) => listUpdate(inputId, inputData),
    findInTodo: (inputId) => findInTodo(inputId)
}
