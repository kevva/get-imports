import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m('@import url(\'foo.css\'); foo bar @import url(\'bar.css\');'), [
		'@import url(\'foo.css\');',
		'@import url(\'bar.css\');'
	]);

	t.deepEqual(m('foobarunicorn'), []);
});
