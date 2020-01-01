const path = require('path');

const logFolder = path.logFolder;

const  ErrorSchema = require('./logSchema')

module.exports = {
    logFolder: logFolder,
    ErrorSchema: ErrorSchema,
};
