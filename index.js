'use strict';

// Taken from web3-utils (https://github.com/ethereum/web3.js/blob/1.x/packages/web3-utils/src/index.js#L192-L203)
// Added here to reduce time to run via npx
const asciiToHex = function (str) {
	if (!str) return '0x00';
	let hex = '';
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		const n = code.toString(16);
		hex += n.length < 2 ? '0' + n : n;
	}

	return '0x' + hex;
};

// (ibid)
const hexToAscii = function (hex) {
	let str = '';
	let i = 0;
	if (hex.substring(0, 2) === '0x') {
		i = 2;
	}
	for (; i < hex.length; i += 2) {
		const code = parseInt(hex.substr(i, 2), 16);
		str += String.fromCharCode(code);
	}
	return str;
};

module.exports = ({ input = '', ignoreLength = false }) => {
	if (/^0x[0-9a-zA-Z,]+$/.test(input)) {
		// then it's bytes to str
		const inputArray = input.split(',');
		if (inputArray.length == 0) {
			return hexToAscii(input);
		} else {
			console.log('Vertical Output Collumn');
			const outputArray = [];
			for (let i = 0; i < inputArray.length; i++) {
				outputArray.splice(i, 0, hexToAscii(inputArray[i]).split('\x00')[0]);
				console.log(hexToAscii(inputArray[i]));
			}
			console.log('\nInline CSV Output');
			process.stdout.write(`${outputArray},`);
			console.log('\n\nStandard Array Output');
			return outputArray;
		}
	} else if (!ignoreLength && input.length > 32) {
		throw Error(
			`Input string is too long, must be maximum of 32. It is currently ${input.length}`,
		);
	}

	return asciiToHex(input).padEnd(66, '0');
};
