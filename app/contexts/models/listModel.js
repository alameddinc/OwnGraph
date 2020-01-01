/**
 *  OwnGraph V1
 */

const {path} = require('../../config')
const {List: ListModel} = require(path.databaseFolder)
const {db_logs} = require('../../contexts/logs')
const Promise = require('promise')

/**
 * Create Function
 * @param data
 * @returns {Promise<*>}
 */
const createList = async (data) => {
    try {
        const list = new ListModel({
            id: Math.random().toString(36).substr(2, 10),
            status: true,
            ...data
        });
        return await list.save();
    } catch (e) {
        return `List Create error: ${e.message}`;
    }
}

/**
 * Remove Function
 * @param id
 * @returns {Promise<string>}
 */
const removeList = async (id) => {
    try {
        const listDeleted = await ListModel.deleteOne({id: id});
        console.log(listItem)
        if (!listItem.deletedCount)
            return `${id} could not be found!`

        return `${id} removed!`;
    } catch (e) {
        return db_logs(`List remove error: ${e.message}`);
    }
}

/**
 * Search Function
 * @param inputId
 * @returns {Promise<*|string>}
 */
const findInList = async (inputId) => {
    try {
        return await ListModel.findOne({id: inputId});
    } catch (e) {
        return db_logs(`List find error: ${e.message}`);
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
        return await ListModel.findOneAndUpdate({id: findId}, data, {new:true});
    } catch (e) {
        return db_logs(`List update error: ${e.message}`);
    }
}

/**
 *
 * @type {{
 * createList: (function(*=): Promise<*>),
 * removeList: (function(*=): Promise<string>),
 * listUpdate: (function(*=, *=): Promise<*|string>),
 * findInList: (function(*=): Promise<*|string>)
 * }}
 */
module.exports = {
    createList: (inputData) => createList(inputData),
    removeList: (inputId) => removeList(inputId),
    listUpdate: (inputId, inputData) => listUpdate(inputId, inputData),
    findInList: (inputId) => findInList(inputId)
}
