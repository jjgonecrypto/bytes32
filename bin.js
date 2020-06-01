#!/usr/bin/env node

'use strict';

const bytes32 = require('.');

console.log(
	bytes32({
		input: process.argv[2],
		ignoreLength: process.argv[3] === '--ignore-length',
	}),
);
