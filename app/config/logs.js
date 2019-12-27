const {ErrorSchema} = require('./logConfig/logSchema');
const fs = require('fs');

const error_log = new ErrorSchema("error","error_logs");
const api_log = new ErrorSchema("API","api_logs");
const db_logs = new ErrorSchema("DB","db_logs");
const redis_logs = new ErrorSchema("Redis","redis_logs");

const logFactory = (data, error_log) => {
    const d = new Date();
    const filename = error_log.filename + d.getDay() + '-' + d.getDay() + '-' + d.getDay() + '.log';

    console.log(error_log.name + "      " + data);
    if (fs.existsSync(filename)) {
        fs.appendFile(filename, data, function (err) {
            if (err) throw err;
            console.log(error_log.name + ' Saved!');
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