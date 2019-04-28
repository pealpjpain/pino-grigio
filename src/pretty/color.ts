import { stdout as stdoutCol } from 'supports-color'

// const colorLvl = supportsColor();

const hasColor = stdoutCol.hasBasic || stdoutCol.has256 || stdoutCol.has16m

const reset = '\x1b[0m';


export function colorify (colorCode : number, input : string) : string
{
	if (!hasColor) return input;

	if (colorCode >= 0 && colorCode < 8) {
		return '\x1b[3' + colorCode + 'm' + input + reset;
	}
	else if (colorCode >= 8 && colorCode < 16) {
		return '\x1b[3' + (colorCode - 8) + ';1m' + input + reset;
	}
	else if (colorCode >= 16 && colorCode < 256) {
		return '\x1b[38;5;' + colorCode + ';1m' + input + reset;
	}

	return input;
}


export const colors = Object.freeze({
	Black: 0,
	DRed: 1,
	DGreen: 2,
	Brown: 3,
	DBlue: 4,
	DViolet: 5,
	DCyan: 6,
	LGray: 7,
	DGray: 8,
	LRed: 9,
	LGreen: 10,
	Yellow: 11,
	LBlue: 12,
	LViolet: 13,
	LCyan: 14,
	White: 15,
});
