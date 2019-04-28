"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var color_1 = require("../pretty/color");
var print = function (cc) { return console.log(sprintf_js_1.sprintf('%3d %s', cc, color_1.colorify(cc, 'Hallo Welt!'))); };
Object.values(color_1.colors).forEach(function (colorCode) { return print(colorCode); });
for (var colorCode = 16; colorCode < 256; colorCode++) {
    print(colorCode);
}
//# sourceMappingURL=color.test.js.map