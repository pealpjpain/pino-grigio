import { sprintf } from 'sprintf-js';

import {
	colorify,
	colors,
} from '../pretty/color'


const print = (cc : number) => console.log (sprintf (
	'%3d %s', cc, colorify (cc, 'Hallo Welt!')
))


Object.values (colors).forEach (colorCode => print (colorCode))

for (let colorCode = 16; colorCode < 256; colorCode++) {
	print (colorCode)
}
