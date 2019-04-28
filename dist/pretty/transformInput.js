"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformInput(input, eol) {
    if (isObject(input))
        return {
            input: input,
            doLog: true,
        };
    if (isString(input))
        try {
            var parsed = JSON.parse(input);
            if (isPino(parsed))
                return {
                    input: parsed,
                    doLog: true,
                };
        }
        catch (err) {
        }
    return {
        input: input.toString() + eol,
        doLog: false,
    };
}
exports.transformInput = transformInput;
var isObject = function (o) { return (Object.prototype.toString.apply(o) === '[object Object]'); };
var isString = function (o) { return (typeof o === 'string'); };
var isPino = function (o) { return (o !== undefined && o.hasOwnProperty('v') && o.v === 1); };
//# sourceMappingURL=transformInput.js.map