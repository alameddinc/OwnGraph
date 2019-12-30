const path = require('path');

const logFolder = path.dirname(require.main.filename) + "/logs/";

const  ErrorSchema = require('./logSchema')

module.exports = {
    logFolder: logFolder,
    ErrorSchema: ErrorSchema,
};
