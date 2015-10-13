var path = require("path");
var log4js = require('log4js');
var fs = require('fs');
log4js.configure(path.join(__dirname, "log4js.json"));

var logPath = __dirname.replace("/config","");
var logDirectory = logPath + '/logs';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

exports.logger = function(name) {
    return log4js.getLogger(name);
};


