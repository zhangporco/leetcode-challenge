const test = require('ava');

/**
 * 未完成
 * Encodes a URL to a shortened URL.
 * https://leetcode.com/problems/design-tinyurl
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
	const words = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const urlArray = longUrl.split('');
	let str = '';
	for (const [ j, word ] of urlArray.entries()) {
		const index = words.indexOf(word) + 1;
		if (index > 0) {
			str += index;
		} else {
			str += word
		}
	}
	
	const head = str.split('://');
	let num = '';
	let result = '';
	for (const [ j, s ] of str.split('').entries()) {
		if (Number.isInteger(s)) {
			num += s;
		} else {
			result += parseInt(num).toString(16);
			result += s;
			num = '';
		}
	}
	console.log(str);
	console.log(result);
	const s16 = parseInt(str).toString(16);
	const s10 = parseInt(s16, 16);
	console.log(s16, s10, str);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {

};

test('short url 0', t => {
	const res = encode('https://leetcode.com/problems/design-tinyurl');
	t.pass(res, 2);
});
