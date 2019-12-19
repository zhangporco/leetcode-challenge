const test = require('ava');

/**
 * @desc: 分治 - Karatsuba 算法
 * @author: Porco
 * @created: 2019/9/11 3:16 PM
 */
const Karatsuba = (num1, num2) => {
	if (num1 === '0' || num2 === '0') return '0';
	const n1Length = num1.length;
	const n2Length = num2.length;
	const minLength = n1Length < n2Length ? n1Length : n2Length;
	
	if (num1.length > 1) {
	
	}
	if (num2.length > 1) {
	
	}
};

function karatsuba2 (x, y) {

}

test('Karatsuba 1', t => {
	const res = karatsuba2('123', '456');
	console.log(res);
	t.pass(res, [1,2,3,4]);
});