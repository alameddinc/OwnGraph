const {ErrorSchema} = require('./logConfig/logSchema');
const fs = require('fs');

const error_log = new ErrorSchema("error","error_logs");

const logFactory = (data, error_log) => {
    const d = new Date();
    const filename = error_log.filename + d.getDay() + '-' + d.getDay() + '-' + d.getDay() + '.log';

    console.log(error_log.filename + "      " + data);
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
    error_log: (input) => logFactory(input,error_log),
}