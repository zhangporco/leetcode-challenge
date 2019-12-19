const test = require('ava');

/**
 * @desc: 大数相乘
 * @author: Porco
 * @created: 2019/9/10 3:40 PM
 */
const bigMultiply = (num1, num2) => {
	if(isNaN(num1) || isNaN(num2)) return '';
	const len1 = num1.length;
	const len2 = num2.length;
	const ans = [];
	for (let i = len1 - 1; i >= 0; i--) {
		for (let j = len2 - 1; j >= 0; j--) {
			let index1 = i + j;
			let index2 = i + j + 1;
			let mul = num1[i] * num2[j] + (ans[index2] || 0);
			ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
			ans[index2] = mul % 10;
		}
	}
	const result = ans.join('');
	return result === 0 ? '0' : result.replace(/^0+/, '');
};

test('bigMultiply 1', t => {
	const res = bigMultiply('0', '0');
	t.pass(res, '56088');
});

// test('bigMultiply 2', t => {
// 	const res = bigMultiply('123456789', '987654321');
// 	t.is(res, '121932631112635269');
// });