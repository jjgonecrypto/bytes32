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

module.exports = ({ input = '', ignoreLength = false }) => {
	if (!ignoreLength && input.length > 32) {
		throw Error(
			`Input string is too long, must be maximum of 32. It is currently ${input.length}`,
		);
	}

	return asciiToHex(input).padEnd(66, '0');
};
