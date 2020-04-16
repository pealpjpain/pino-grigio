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
    var channel;
    if (channelName === undefined) {
        channel = channelName_1.createChannelName(mainConfig, callsite());
    }
    else if (Array.isArray(channelName)) {
        channel = channelName;
    }
    else if (typeof channelName === 'string') {
        channel = [channelName];
    }
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