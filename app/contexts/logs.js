const {ErrorSchema} = require('../config/logConfig/logSchema');
const fs = require('fs');

const error_log = new ErrorSchema("error","error_logs");
const api_log = new ErrorSchema("API","api_logs");
const db_logs = new ErrorSchema("DB","db_logs");
const redis_logs = new ErrorSchema("Redis","redis_logs");

const logFactory = (data, logSchema) => {
    const d = new Date();
    const logFolder =  __dirname + "/../../logs/";
    const filename =  logFolder + logSchema.fileType + '-' + d.getDay() + '-' + d.getMonth() + '-' + d.getFullYear() + '.log';

    console.log(logSchema.name + "      " + data);
    if (fs.existsSync(filename)) {
        fs.appendFile(filename, data + "\n", function (err) {
            if (err) throw err;
            console.log(logSchema.name + ' Saved!');
        });
    } else {
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
        })
    }

}

module.exports = {
    error_logs: (input) => logFactory(input,error_log),
    api_logs: (input) => logFactory(input,api_log),
    db_logs: (input) => logFactory(input,db_logs),
    redis_logs: (input) => logFactory(input,redis_logs),
}
