#!/usr/bin/env node

const pump = require ('pump');
const split = require ('split2')

const { fstatSync } = require ('fs');
const { Transform } = require('readable-stream');

const prettyPrinterFactory = require ('./dist/pretty/pretty');

const prettyPrinter = prettyPrinterFactory ();

const prettyTransport = new Transform({
	objectMode: true,
	transform (chunk, enc, cb) {
		const line = prettyPrinter (chunk.toString());
		if (line === undefined)
			return cb();

		// console.log(`<${line}>`);
		cb(null, line);
	}
})

pump (
	process.stdin,
	split(),
	prettyTransport,
	process.stdout
);

// Like: https://github.com/pinojs/pino/pull/358
if (!process.stdin.isTTY && !fstatSync (process.stdin.fd).isFile()) {
	const noop = function() {};
  process.once ('SIGINT', noop)
}
