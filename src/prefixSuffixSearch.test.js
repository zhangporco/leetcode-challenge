const test = require('ava');

/**
 * @param {string[]} words
 */
const WordFilter = function(words) {
	this.words = words;
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
	console.log(this.words);
};


test('prefix suffix 0', t => {
	const wf = new WordFilter(['apple']);
	const res = wf.f('a', 'e');
	t.pass();
});
