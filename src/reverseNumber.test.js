const test = require('ava');

/**
 * 完成
 * @desc: 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * @author: Porco
 * @created: 2019/9/4 5:44 PM
 */
const reverseNumber = (x) => {
	const getNum = (array) => {
		let num = '';
		for (const v of array) {
			num += v;
		}
		return Number(num);
	};
	
	let num = 0;
	if (x < 0) {
		const array = (x + '').substring(1).split('');
		num = getNum(array.reverse()) * -1;
	} else {
		const array = (x + '').split('');
		num = getNum(array.reverse());
	}
	return num > 2147483647 || num < -2147483648 ? 0 : num;
};

test('reverseNumber 1', t => {
	const res = reverseNumber(-123);
	t.is(res, -321);
});

test('reverseNumber 2', t => {
	const res = reverseNumber(123);
	t.is(res, 321);
});

test('reverseNumber 3', t => {
	const res = reverseNumber(120);
	t.is(res, 21);
});