'use strict';
const arrayUniq = require('array-uniq');
const importRegex = require('import-regex');

module.exports = str => arrayUniq((str.match(importRegex()) || []).map(x => x.trim()));
