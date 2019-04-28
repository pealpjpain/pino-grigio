"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apputils_1 = require("@phgroe/apputils");
var main_1 = require("../adapter/main");
main_1.initLogging({
    projectRoot: apputils_1.rootPath,
});
var log = main_1.createLogger();
log.info('Hello Earth, this is the child logger!');
console.log('Some plain string in between');
require("./some/sub/module");
var otherLog1 = main_1.createLogger(['app', 'graffl']);
otherLog1.warn('Lass dir das eine Warnung sein!');
var otherLog2 = main_1.createLogger(['app', 'something', 'else']);
otherLog2.error('Halb zog es ihn, halb sank er hin');
var otherLog3 = main_1.createLogger(['app', 'rhyme', 'alot']);
otherLog3.fatal('Durch diese hohle Birne muss er kommen!');
//# sourceMappingURL=main.test.js.map