const test = require('ava');

/**
 * 完成
 * @desc: 给定一个字符串 s，找到 s 中最长的回文子串
 * @author: Porco
 * @created: 2019/9/4 4:33 PM
 */
const longestPalindrome = (s) => {
	if (s.length < 2) return s;
	
	const backText = (str) => {
		const len = Math.floor(str.length / 2);
		for (let i = 0; i < len; i++) {
			if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
		}
		return true;
	};
	
	let max = s.charAt(0);
	for (let i = 0; i < s.length; i++) {
		for (let j = s.length - 1; j > i; j--) {
			if (s.charAt(i) === s.charAt(j)) {
				const back = s.substring(i, j + 1);
				if (max.length < back.length) {
					if (backText(back)) {
						max = back;
					}
				}
			}
		}
	}
	return max;
};

test('longestPalindrome 1', t => {
	const res = longestPalindrome('babad12');
	t.is(res, 'bab');
});

test('longestPalindrome 2', t => {
	const res = longestPalindrome('cbbd');
	t.is(res, 'bb');
});

test('longestPalindrome 3', t => {
	const res = longestPalindrome('');
	t.is(res, '');
});

test('longestPalindrome 4', t => {
	const res = longestPalindrome('1');
	t.is(res, '1');
});

test('longestPalindrome 5', t => {
	const res = longestPalindrome('12');
	t.is(res, '1');
});

test('longestPalindrome 6', t => {
	const res = longestPalindrome('abacab');
	t.is(res, 'bacab');
});

test('longestPalindrome 7', t => {
	const str = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
	const res = longestPalindrome(str);
	t.is(res, str);
});