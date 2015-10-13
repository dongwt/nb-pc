var path = require("path");
var log4js = require('log4js');
log4js.configure(path.join(__dirname, "log4js.json"));

exports.logger = function(name) {
    return log4js.getLogger(name);
};


