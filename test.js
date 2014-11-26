'use strict';

var getImport = require('./');
var test = require('ava');

test('get CSS @imports from a string', function (t) {
	t.plan(3);

	var str = '@import url(\'foo.css\'); foo bar @import url(\'bar.css\');';
	var ret = getImport(str);

	t.assert(ret.length === 2);
	t.assert(ret[0] === '@import url(\'foo.css\');');
	t.assert(ret[1] === '@import url(\'bar.css\');');
});
