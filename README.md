# Bytes32

Simple CLI tool to convert a string to `bytes32` for Ethereum.

## Usage:

```bash
$ npx bytes32 sETH
0x7345544800000000000000000000000000000000000000000000000000000000

$ npx bytes32 Something\ With\ Spaces
0x536f6d657468696e672057697468205370616365730000000000000000000000

$ npx bytes32 Supercalifragilisticexpialidocious
Error: Input string is too long, must be maximum of 32. It is currently 34

$ npx bytes32 Supercalifragilisticexpialidocious --ignore-length

```

or in code

```javascript
const bytes32 = require('bytes32');

console.log(bytes32({ input: 'sETH' });

// ignore length error
console.log(bytes32({ input: 'Supercalifragilisticexpialidocious', ignoreLength: true });
```
