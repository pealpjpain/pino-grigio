"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var callsite = require("callsite");
var pino = require("pino");
var path_1 = require("path");
var channelName_1 = require("./channelName");
var mainConfig;
var mainLogger = null;
function initLogging(cfg) {
    if (cfg === void 0) { cfg = createDefaultConfig(); }
    if (mainLogger !== null) {
        throw new Error('Logging has already been initialised');
    }
    mainConfig = cfg;
    mainLogger = pino();
}
exports.initLogging = initLogging;
exports.createLogger = function (channelName) {
    return (mainLogger.child({
        channel: channelName || channelName_1.createChannelName(mainConfig, callsite()),
    }));
};
var createDefaultConfig = function () { return ({
    projectRoot: path_1.dirname(require.main.filename),
}); };
//# sourceMappingURL=main.js.map