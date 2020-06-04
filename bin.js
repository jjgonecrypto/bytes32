#!/usr/bin/env node

'use strict';

const bytes32 = require('.');

const [, , input] = process.argv;

console.log(
	bytes32({
		input,
		ignoreLength: process.argv[3] === '--ignore-length',
	}),
);
