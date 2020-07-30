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
	if (/^0x[0-9a-zA-Z]+$/.test(input)) {
		// then it's bytes to str
		return hexToAscii(input);
	} else if (!ignoreLength && input.length > 32) {
		throw Error(
			`Input string is too long, must be maximum of 32. It is currently ${input.length}`,
		);
	}

	return asciiToHex(input).padEnd(66, '0');
};
