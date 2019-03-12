import { CallSite } from 'callsite';
import { sep } from 'path';
import { MainLoggerConfig } from './main';

// Channel name by module discovery

export const createChannelName = (
	cfg : MainLoggerConfig,
	cs : CallSite[]
) : string[] => (
	isCallTrace (cs)
		? splitChannelName (cfg, cs[1].getFileName())
		: []
);

// Check if this is a valid call trace with minimal necessary data

const isCallTrace = (cs : CallSite[]) : boolean => (
	typeof cs.length === 'number'
		&& cs.length > 1
		&& cs[1].getFunctionName () === null
);

// Channel name filters

const regexFileSuffix = /\.(js|jsx|ts|tsx)$/;
const regexExecBase = sep === '/'
	? /^\/.+?\//
	: /^\\.+?\\/;

// Filter file name and split remainder into a string array

export function splitChannelName (
	cfg : MainLoggerConfig,
	fileName : string
) : string[]
{
	console.log (fileName);

	const a = fileName.replace (cfg.projectRoot, '');
	console.log('/ root : %s', a);

	const b = a.replace (regexFileSuffix, '');
	console.log('/ suffix : %s', b);

	// TODO Flag to disable or customize exec-base removal
	const c = b.replace (regexExecBase, '');
	console.log('/ base : %s', c);

	const z = c.split (sep);
	return deleteDuplicates (z);
}

// Array duplicate neighbor elimination

const deleteDuplicates = (strArr : string[]) : string[] => {
	let y = true;

	while (y) {
		if ((strArr.length > 1) && strArr[0] === strArr[1]) {
			strArr.shift();
		}
		else {
			y = false;
		}
	}

	return strArr;
};
