export type LogObject = {
	time? : number
	level? : number
	msg? : string
	pid? : number
	hostname? : string
	channel : string[]
}

export type LogThis = {
	input : LogObject
	doLog: true
} | {
	input : string
	doLog: false
}

export function transformInput (input : any, eol : string) : LogThis
{
	if (isObject (input)) return {
		input,
		doLog: true,
	}

	if (isString (input)) try {
		const parsed = JSON.parse (input)

		if (isPino (parsed)) return {
			input: parsed,
			doLog: true,
		}
	}
	catch (err) {
		// ignore parsing errors, just proceed
	}

	return {
		input: input.toString() + eol,
		doLog: false,
	}
}


const isObject = (o : any) => (
  Object.prototype.toString.apply(o) === '[object Object]'
)

const isString = (o : any) => (
	typeof o === 'string'
)

const isPino = (o : { v? : number }) => (
  o !== undefined && o.hasOwnProperty('v') && o.v === 1
)
