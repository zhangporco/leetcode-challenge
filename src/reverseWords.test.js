const test = require('ava');

/**
 * 完成
 * 接受一个字符串，反转其中每个单词的字母顺序，但是保留初始单词顺序以及空格
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
	const words = s.split(' ');
	let res = '';
	for (const [ i, word ] of words.entries()) {
		let reverse = '';
		for (let i = word.length - 1; i >= 0; i--) {
			reverse += word.charAt(i);
		}
		res += reverse;
		if (i < words.length - 1) {
			res += ' ';
		}
	}
	return res;
};

/**
 * Given an input string, reverse the string word by word.
 For example,
 Given s = "the sky is blue",
 return "blue is sky the".
 * @param {string} str
 * @returns {string}
 */
const reverseWords2 = function (str) {
	const array = str.replace(/\s+/g, ',').split(',');
	let res = '';
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[ i ] === '') {
			continue;
		}
		res += array[ i ] + ' ';
	}
	return res.replace(/^\s+|\s+$/g, '');
};

test('reverse words 0', t => {
	const res = reverseWords("Let's take LeetCode contest");
	t.is(res, "s'teL ekat edoCteeL tsetnoc");
});

test('reverse words 0', t => {
	const res = reverseWords2("a \n" +
		"yqo! qjktum ym. .fumuhau");
	console.log(res);
	t.pass(res, "a");
});
