"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supports_color_1 = require("supports-color");
var hasColor = supports_color_1.stdout.hasBasic || supports_color_1.stdout.has256 || supports_color_1.stdout.has16m;
var reset = '\x1b[0m';
function colorify(colorCode, input) {
    if (!hasColor)
        return input;
    if (colorCode >= 0 && colorCode < 8) {
        return '\x1b[3' + colorCode + 'm' + input + reset;
    }
    else if (colorCode >= 8 && colorCode < 16) {
        return '\x1b[3' + (colorCode - 8) + ';1m' + input + reset;
    }
    else if (colorCode >= 16 && colorCode < 256) {
        return '\x1b[38;5;' + colorCode + ';1m' + input + reset;
    }
    return input;
}
exports.colorify = colorify;
exports.colors = Object.freeze({
    Black: 0,
    DRed: 1,
    DGreen: 2,
    Brown: 3,
    DBlue: 4,
    DViolet: 5,
    DCyan: 6,
    LGray: 7,
    DGray: 8,
    LRed: 9,
    LGreen: 10,
    Yellow: 11,
    LBlue: 12,
    LViolet: 13,
    LCyan: 14,
    White: 15,
});
//# sourceMappingURL=color.js.map