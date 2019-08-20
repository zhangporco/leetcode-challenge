const test = require('ava');

/**
 * 给定一个字符串，找出不含有重复字符的 最长子串 的长度。
 * 示例：
 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	let str = '';
	let res = '';
	for (let i = 0; i < s.length; i++) {
		const index = str.indexOf(s.charAt(i));
		if (index < 0) {
			str += s.charAt(i);
		} else {
			res = str.length > res.length ? str : res;
			str = '';
			const find = (n) => {
				if (n >= 0) {
					if (s.charAt(n) !== s.charAt(i)) {
						return find(n - 1);
					} else {
						return n;
					}
				}
			}
			i = find(i - 1);
		}
	}
	res = str.length > res.length ? str : res;
	return res.length;
};

test('lengthOfLongestSubstring 0', t => {
	const res = lengthOfLongestSubstring('abcabcbb');
	t.is(res, 3);
});
