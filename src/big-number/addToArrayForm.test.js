const test = require('ava');

/**
 * @desc: 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。
 * 例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * @author: Porco
 * @created: 2019/9/10 3:42 PM
 */
const addToArrayForm = (A, K) => {
	K = (K + '').split('');
	const maxLength = A.length > K.length ? A.length : K.length;
	const makeArray = (array) => {
		if (array.length === maxLength) return array;
		
		const len = array.length;
		for (let i = 0; i < maxLength - len; i++) {
			array.unshift(0);
		}
		return array;
	};
	A = makeArray(A);
	K = makeArray(K);
	
	let res = [];
	let carry = 0;
	for (let i = maxLength - 1; i >= 0; i--) {
		let sum = Number(A[ i ]) + Number(K[ i ]) + carry;
		if (sum > 9) {
			carry = 1;
		} else {
			carry = 0;
		}
		res.unshift(Number((sum + '').substring((sum + '').length - 1)));
	}
	if (carry > 0) {
		res.unshift(1);
	}
	return res;
};

test('addToArrayForm 1', t => {
	const res = addToArrayForm([ 1, 2, 0, 0 ], 34);
	t.pass(res, [1,2,3,4]);
});
