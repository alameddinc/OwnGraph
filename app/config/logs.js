const fs = require('fs');

const error_log = (data) => {
    const d = new Date();
    const filename = '__dirname/logs/error_logs-' + d.getDay() + '-' + d.getDay() + '-' + d.getDay() + '.log';

    console.log("Error_log:      " + data);
    if (fs.existsSync(filename)) {
        fs.appendFile(filename, data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    } else {
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
        })
    }

}

module.exports = {
    error_log: (input) => error_log(input),
}