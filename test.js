'use strict';

var test = require('ava');
var getImport = require('./');

test('get CSS @imports from a string', function (t) {
	t.plan(3);

	var str = '@import url(\'foo.css\'); foo bar @import url(\'bar.css\');';
	var ret = getImport(str);

	t.assert(ret.length === 2, ret.length);
	t.assert(ret[0] === '@import url(\'foo.css\');', ret[0]);
	t.assert(ret[1] === '@import url(\'bar.css\');', ret[1]);
});
