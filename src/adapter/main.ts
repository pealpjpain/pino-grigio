import * as callsite from 'callsite';
import * as pino from 'pino';

import { Logger } from 'pino';
import { createChannelName } from './channelName';

// Main Logger Configuration
export interface MainLoggerConfig {
	projectRoot : string
}

// Runtime variables

let mainConfig : MainLoggerConfig;
let mainLogger : Logger = null

// Initialise logging

export function initLogging (cfg : MainLoggerConfig)
{
	if (mainLogger !== null) {
		throw new Error ('Logging has already been initialised')
	}

	mainConfig = cfg;
	mainLogger = pino ()
}

// Create log channels

export const createLogger = (channelName? : string) : Logger =>
(
	mainLogger.child({
		channel: channelName || createChannelName (
			mainConfig,
			callsite ()
		),
	})
);
