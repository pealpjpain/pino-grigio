import { rootPath } from '@phgroe/apputils';

import {
	initLogging,
	createLogger,
} from '../adapter/main';

initLogging ({
	projectRoot: rootPath,
});

const log = createLogger ();
log.info ('Hello Earth, this is the child logger!');

console.log ('Some plain string in between');

import './some/sub/module';

const otherLog1 = createLogger (['app', 'graffl']);
otherLog1.warn ('Lass dir das eine Warnung sein!');

const otherLog2 = createLogger (['app', 'something', 'else']);
otherLog2.error ('Halb zog es ihn, halb sank er hin');

const otherLog3 = createLogger (['app', 'rhyme', 'alot']);
otherLog3.fatal ('Durch diese hohle Birne muss er kommen!');
