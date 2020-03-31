import { inspect } from '@phgroe/apputils'

import { transformInput } from './transformInput'

import {
	formatTime,
	TimeFormat,
} from './formatTime'

import {
	defaultOptions,
	PrettyOptions,
} from './options'

import {
	colorify,
	colors,
} from './color'


function getLogLevelTag (level : number) : string
{
	switch (level) {
		case 60:  // fatal
			return colorify (colors.LViolet, 'F')
		case 50:  // error
			 return colorify (colors.LRed, 'E')
		case 40:  // warn
			return colorify (colors.Yellow, 'W')
		case 30:  // info
			return colorify (colors.White, 'I')
		case 20:  // debug
			return colorify (colors.LGreen, 'D')
		case 10:  // trace
			return colorify (colors.LBlue, 'T')
	}

	return '-'
}

function quersumme (str : string) : number
{
	let summe = 0

	for (let i = 0; i < str.length; i ++) {
		summe += str.charCodeAt (i)
	}

	return summe
}

export function prettyPrinterFactory (options : PrettyOptions)
{
	const opt = Object.assign (
		Object.create (null),
		defaultOptions,
		options
	)

	const EOL = opt.crlf ? '\r\n' : '\n'

	function print (anyInput : any) : string
	{
		const logThis = transformInput (anyInput, EOL)

		if (!logThis.doLog) {
			return logThis.input as string
		}

		const { input } = logThis
		let output : string = ''

		// Timestamp
		if (input.time) {
			output += colorify (
				colors.DGray,
				formatTime (input.time, TimeFormat.ONLYTIME)
			) + ' '
		}

		// Log level
		if (input.level) {
			output += getLogLevelTag (input.level) + ' '
		}

		// Log channel name
		{
			let channelName

			if (input.channel) {
				channelName = input.channel.join (':')
			}
			else if (input.ns) {
				channelName = input.ns
			}
			else {
				channelName = 'debug'
			}

			const summe = quersumme (channelName)
			const farbe = (summe % 210) + 21

			output += colorify (farbe, channelName) + ' '
		}

		output += input.msg

		return output + EOL
	}

	print.channelColorMap = {}

	return print
}

module.exports = prettyPrinterFactory
