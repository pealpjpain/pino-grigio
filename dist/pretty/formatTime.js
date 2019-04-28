"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var TimeFormat;
(function (TimeFormat) {
    TimeFormat["ISO"] = "iso";
    TimeFormat["SHORT"] = "short";
    TimeFormat["LONG"] = "long";
    TimeFormat["ONLYTIME"] = "onlytime";
})(TimeFormat = exports.TimeFormat || (exports.TimeFormat = {}));
function formatTime(time, format) {
    if (format === void 0) { format = TimeFormat.ISO; }
    var date = new Date(time);
    switch (format) {
        case TimeFormat.ISO:
            return date.toISOString();
        case TimeFormat.ONLYTIME:
            return sprintf_js_1.sprintf('%02d:%02d:%02d.%03d', date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    }
    return date.toISOString();
}
exports.formatTime = formatTime;
//# sourceMappingURL=formatTime.js.map