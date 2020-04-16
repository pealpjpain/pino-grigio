import * as callsite from 'callsite'
import * as pino from 'pino'

import { dirname } from 'path'
import { Logger, LoggerOptions } from 'pino'
import { createChannelName } from './channelName'

// Main Logger Configuration

export interface MainLoggerConfig extends LoggerOptions {
	projectRoot : string
}

// Runtime variables

let mainConfig : MainLoggerConfig
let mainLogger : Logger = null

// Initialise logging

export function initLogging (
	cfg : MainLoggerConfig = createDefaultConfig ()
)
{
	if (mainLogger !== null) {
		throw new Error ('Logging has already been initialised')
	}

	mainConfig = cfg
	mainLogger = pino (mainConfig)
}

// Create log channels

export function createLogger (channelName? : string | string []) : Logger
{
	let channel : string []

	if (channelName === undefined) {
		channel = createChannelName (mainConfig, callsite ())
	}
	else if (Array.isArray (channelName)) {
		channel = channelName
	}
	else if (typeof channelName === 'string') {
		channel = [ channelName ]
	}

	return mainLogger.child ({
		channel,
	})
}

// Default logger configuration (Pino + adapter)

const createDefaultConfig = () : MainLoggerConfig => ({
	level: 'info',
	projectRoot: dirname (require.main.filename),
})
