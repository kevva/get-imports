'use strict';

var arrayUniq = require('array-uniq');
var importRegex = require('import-regex');

module.exports = function (str) {
	var imports = str.match(importRegex());

	if (!imports) {
		return [];
	}

	return arrayUniq(imports.map(function (el) {
		return el.trim();
	}));
};
