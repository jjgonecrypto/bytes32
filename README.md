# Bytes32

Simple CLI tool to convert a string to `bytes32` for Ethereum.

## Usage:

```bash
$ npx bytes32
0x0000000000000000000000000000000000000000000000000000000000000000

$ npx bytes32 sETH
0x7345544800000000000000000000000000000000000000000000000000000000

$ npx bytes32 Something\ With\ Spaces
0x536f6d657468696e672057697468205370616365730000000000000000000000

$ npx bytes32 Supercalifragilisticexpialidocious
Error: Input string is too long, must be maximum of 32. It is currently 34

$ npx bytes32 Supercalifragilisticexpialidocious --ignore-length
0x537570657263616c6966726167696c697374696365787069616c69646f63696f7573
```

or in code

```javascript
const bytes32 = require('bytes32');

console.log(bytes32({ input: 'sETH' });
// 0x7345544800000000000000000000000000000000000000000000000000000000

console.log(bytes32({ input: 'Supercalifragilisticexpialidocious', ignoreLength: true });
// 0x537570657263616c6966726167696c697374696365787069616c69646f63696f7573
```
