const test = require('ava');

/**
 * 完成
 * 输出 1 - n 的整数的字符串表示
 * 如果当前整数是 3 的倍数，使用 Fizz 替换，如果 5 的倍数，使用 Buzz 替换，
 * 如果既是 3 也是 5 的倍数，使用 FizzBuzz 替换。
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
	const res = [];
	for (let i = 1; i <= n; i++) {
		let str = i;
		if (i % 3 === 0) {
			str = 'Fizz'
		}
		if (i % 5 === 0) {
			if (i % 3 === 0) {
				str += 'Buzz'
			} else {
				str = 'Buzz'
			}
		}
		res.push(str + '');
	}
	return res;
};

test('fizz buzz 0', t => {
	const res = fizzBuzz(15);
	console.log(res);
	t.pass();
});
