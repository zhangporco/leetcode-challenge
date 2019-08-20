const test = require('ava');

/**
 * 未完成
 * 1.长度超过8
 * 2.大小写字母，数字，符号，至少三种
 * 3.不能有相同长度超过 2 的子串
 * @param {string} str
 * @return {string} 如果符合要求输出：OK，否则输出NG
 */
const invildPassword = function (str) {
	const patten = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_]+$)(?![a-z0-9]+$)(?![a-z\\W_]+$)(?![0-9\\W_]+$)[a-zA-Z0-9\\W_]{8,}$/;
	const res = patten.test(str);
	if (!res) return 'NG';
	for (let i = 0; i < str.length - 2; i++) {
		const reg = new RegExp(str.substring(i, i + 3), "g");
		if (str.match(reg).length > 1) return 'NG';
	}
	return 'OK';
};

// test('invildPassword 0', t => {
//     const res = invildPassword('021Abc9000');
//     t.is('OK', res);
// });
// test('invildPassword 1', t => {
//     const res = invildPassword('021Abc9Abc1');
//     t.is('NG', res);
// });
// test('invildPassword 2', t => {
//     const res = invildPassword('021ABC9000');
//     t.is('NG', res);
// });
test('invildPassword 3', t => {
	const res = invildPassword('021$bc9000');
	t.is('OK', res);
});