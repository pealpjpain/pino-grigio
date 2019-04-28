import { sprintf } from 'sprintf-js';


export enum TimeFormat {
	ISO = 'iso',
	SHORT = 'short',
	LONG = 'long',
	ONLYTIME = 'onlytime',
}


export function formatTime (
	time : number,
	format : TimeFormat = TimeFormat.ISO
) : string
{
	const date = new Date (time)

	switch (format) {
		case TimeFormat.ISO:
			return date.toISOString()

		case TimeFormat.ONLYTIME:
			return sprintf (
				'%02d:%02d:%02d.%03d',
				date.getHours(),
				date.getMinutes(),
				date.getSeconds(),
				date.getMilliseconds()
			)
	}

	return date.toISOString()
}
