const test = require('ava');

/**
 * 完成
 * 大数相加
 * @desc: 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * @author: Porco
 * @created: 2019/9/10 2:40 PM
 */
const addStrings = (num1, num2) => {
	const maxLength = num1.length > num2.length ? num1.length : num2.length;
	const getZero = (num) => {
		let zero = '';
		for (let i = 0; i <= num; i++) {
			zero += '0';
		}
		return zero;
	};
	num1 = getZero(maxLength - num1.length).substring(1) + num1;
	num2 = getZero(maxLength - num2.length).substring(1) + num2;
	let carry = 0;
	let res = '';
	for (let i = maxLength - 1; i >= 0; i--) {
		let sum = Number(num1[i]) + Number(num2[i]) + carry;
		if (sum > 9) {
			carry = 1;
		} else {
			carry = 0;
		}
		sum += '';
		res += sum.substring(sum.length - 1);
	}
	if (carry > 0) {
		res += 1;
	}
	return res.split('').reverse().join('');
};

test('addStrings 1', t => {
	const res = addStrings('123456789', '987654321');
	t.is(res, '1111111110');
});

test('addStrings 2', t => {
	const res = addStrings('1', '9');
	t.is(res, '10');
});

test('addStrings 3', t => {
	const res = addStrings('98', '9');
	t.is(res, '107');
});

test('addStrings 4', t => {
	const res = addStrings('9133', '0');
	t.is(res, '9133');
});

test('addStrings 4', t => {
	const res = addStrings('913300000000000000000000000000000000', '0');
	t.is(res, '913300000000000000000000000000000000');
});