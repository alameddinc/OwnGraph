const fs = require('fs');

const {log} = require('../config');

const error_log = new log.ErrorSchema("error", "error_logs");
const db_logs = new log.ErrorSchema("DB", "db_logs");
const redis_logs = new log.ErrorSchema("Redis", "redis_logs");

const logFactory = (data, logSchema) => {
    const d = new Date();
    const filename = log.logFolder + logSchema.fileType + '-' + d.getDay() + '-' + d.getMonth() + '-' + d.getFullYear() + '.log';
    const errorText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " - " + data + "\n"
    console.log(errorText);
    if (fs.existsSync(filename)) {
        fs.appendFile(filename, errorText, function (err) {
            if (err) throw err;
            console.log(logSchema.name + ' Saved!');
        });
    } else {
        fs.writeFile(filename, errorText, (err) => {
            if (err) throw err;
        })
    }

}

module.exports = {
    error_logs: (input) => logFactory(input, error_log),
    db_logs: (input) => logFactory(input, db_logs),
    redis_logs: (input) => logFactory(input, redis_logs),
}
