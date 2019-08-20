const test = require('ava');

/**
 * 完成
 * 接受一个单词列表，如果某个单词的所以字母都在美式键盘的同一行上，返回全部这种单词
 * Note:
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
	const templete = 'qwertyuiopQWERTYUIOP' + 'asdfghjklASDFGHJKL' + 'zxcvbnmZXCVBNM';
	const res = [];
	for (const word of words) {
		let boo = 0;
		for (let i = 0; i < word.length; i++) {
			const index = templete.indexOf(word.charAt(i));
			const n = index >= 0 && index <= 19 ? 1 :
				index >= 20 && index <= 37 ? 2 :
					index >= 38 && index <= 51 ? 3 : 0;
			if (boo === 0 || boo === n) {
				boo = n;
			} else if (boo !== n) {
				boo = 0;
				break;
			}
		}
		if (boo !== 0) {
			res.push(word);
		}
	}
	return res;
};

test('keyboard row 0', t => {
	const res = findWords([ "Hello", "Alaska", "Dad", "Peace" ]);
	t.is(res[ 0 ], "Alaska");
	t.is(res[ 1 ], "Dad");
});
