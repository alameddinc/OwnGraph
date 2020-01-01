/**
 *  OwnGraph V1
 */

const {path} = require('../../config')
const {List: ListModel} = require(path.databaseFolder)
const {db_logs} = require('../../contexts/logs')
const Promise = require('promise')

/**
 * Create Function
 * @param  data
 * @returns {{...data}}
 */
const createList = (data) => {
    console.log("Data Control : ");
    console.log(data);
    const tempList = {
        id: Math.random().toString(36).substr(2,10),
        status: true,
        ...data
    };
    ListModel.create(tempList, (err, result) => {
        if (err){
            db_logs("List Created Error: " + err);
            throw err
        };
    });
    return tempList;
}


/**
 * Delete Function
 * @param id
 * @returns String
 */
const removeList = (id) => {
    return new Promise((resolve, reject)=>{
        console.log("started")
        ListModel.find({id: id}).deleteOne((err, result) => {
            if (err){
                reject(err);
            };
            resolve(result);
        })
    }).then((i)=>{
        const doesntExist = id + "item doesn't exist";
        if(i.deletedCount)
            return id + "item is deleted";
        else{
            db_logs(doesntExist);
            return doesntExist;
        }

    }).catch((err)=>{
        db_logs("List Remove Error: " + err);
        return "List Remove Error"
    })
}

/**
 * Find in List Function
 * @param data
 * @returns {*}
 */
const findInList = (inputId) => {
    ListModel.find({id: inputId}, (err, result) => {
        if (err){
            db_logs("List Find Error: " + err);
            throw err
        };
        return result;
    });
}

/**
 * Update Function
 * @param find
 * @param data

 */
const listUpdate = (findId ,data) => {
    ListModel.update({id: findId}, data, (err, result) => {
        if (err){
            db_logs("List Update Error: " + err);
            throw err
        };
        return "List Removed";
    });
}

module.exports={
    createList : (inputData) => createList(inputData),
    removeList : (inputId) => removeList(inputId),
    listUpdate : (inputId, inputData) => listUpdate(inputId, inputData),
    findInList : (inputId) => findInList(inputId)
}
