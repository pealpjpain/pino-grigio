"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transformInput_1 = require("./transformInput");
var formatTime_1 = require("./formatTime");
var options_1 = require("./options");
var color_1 = require("./color");
function getLogLevelTag(level) {
    switch (level) {
        case 60:
            return color_1.colorify(color_1.colors.LViolet, 'F');
        case 50:
            return color_1.colorify(color_1.colors.LRed, 'E');
        case 40:
            return color_1.colorify(color_1.colors.Yellow, 'W');
        case 30:
            return color_1.colorify(color_1.colors.White, 'I');
        case 20:
            return color_1.colorify(color_1.colors.LGreen, 'D');
        case 10:
            return color_1.colorify(color_1.colors.LBlue, 'T');
    }
    return '-';
}
function quersumme(str) {
    var summe = 0;
    for (var i = 0; i < str.length; i++) {
        summe += str.charCodeAt(i);
    }
    return summe;
}
function prettyPrinterFactory(options) {
    var opt = Object.assign(Object.create(null), options_1.defaultOptions, options);
    var EOL = opt.crlf ? '\r\n' : '\n';
    function print(anyInput) {
        var logThis = transformInput_1.transformInput(anyInput, EOL);
        if (!logThis.doLog) {
            return logThis.input;
        }
        var input = logThis.input;
        var output = '';
        if (input.time) {
            output += color_1.colorify(color_1.colors.DGray, formatTime_1.formatTime(input.time, formatTime_1.TimeFormat.ONLYTIME)) + ' ';
        }
        if (input.level) {
            output += getLogLevelTag(input.level) + ' ';
        }
        {
            var channelName = void 0;
            if (input.channel) {
                channelName = input.channel.join(':');
            }
            else if (input.ns) {
                channelName = input.ns;
            }
            else {
                channelName = 'debug';
            }
            var summe = quersumme(channelName);
            var farbe = (summe % 210) + 21;
            output += color_1.colorify(farbe, channelName) + ' ';
        }
        output += input.msg;
        return output + EOL;
    }
    print.channelColorMap = {};
    return print;
}
exports.prettyPrinterFactory = prettyPrinterFactory;
module.exports = prettyPrinterFactory;
//# sourceMappingURL=pretty.js.map