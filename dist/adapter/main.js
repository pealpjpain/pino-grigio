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
    mainLogger = pino(mainConfig);
}
exports.initLogging = initLogging;
function createLogger(channelName) {
    var channel = (function () {
        if (Array.isArray(channelName)) {
            return channelName;
        }
        if (typeof channelName === 'string') {
            return [channelName];
        }
        return channelName_1.createChannelName(mainConfig, callsite());
    })();
    return mainLogger.child({
        channel: channel,
    });
}
exports.createLogger = createLogger;
var createDefaultConfig = function () { return ({
    level: 'info',
    projectRoot: path_1.dirname(require.main.filename),
}); };
//# sourceMappingURL=main.js.map