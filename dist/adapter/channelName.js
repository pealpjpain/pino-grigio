"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
exports.createChannelName = function (cfg, cs) { return (isCallTrace(cs)
    ? splitChannelName(cfg, cs[1].getFileName())
    : []); };
var isCallTrace = function (cs) { return (typeof cs.length === 'number'
    && cs.length > 1
    && cs[1].getFunctionName() === null); };
var regexFileSuffix = /\.(js|jsx|ts|tsx)$/;
var regexExecBase = path_1.sep === '/'
    ? /^\/.+?\//
    : /^\\.+?\\/;
function splitChannelName(cfg, fileName) {
    var a = fileName.replace(cfg.projectRoot, '');
    var b = a.replace(regexFileSuffix, '');
    var c = b.replace(regexExecBase, '');
    var z = c.split(path_1.sep);
    return deleteDuplicates(z);
}
exports.splitChannelName = splitChannelName;
var deleteDuplicates = function (strArr) {
    var y = true;
    while (y) {
        if ((strArr.length > 1) && strArr[0] === strArr[1]) {
            strArr.shift();
        }
        else {
            y = false;
        }
    }
    return strArr;
};
//# sourceMappingURL=channelName.js.map