# get-imports [![Build Status](https://travis-ci.org/kevva/get-imports.svg?branch=master)](https://travis-ci.org/kevva/get-imports)

> Get CSS @imports from a string


## Install

```
$ npm install --save get-imports
```


## Usage

```js
const getImports = require('get-imports');

getImports('@import url(\'foo.css\'); foo @import url(\'bar.css\'); bar');
//=> ['@import url('foo.css');', '@import url('bar.css');']
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
