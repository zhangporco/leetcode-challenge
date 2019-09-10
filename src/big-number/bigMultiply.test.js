const test = require('ava');

const bigMultiply = (num1, num2) => {
	let res = 0;
	for (let i = 0; i < num1.length; i++) {
		let sum = '';
		for (let j = 0; j < num2.length; j++) {
			let num = Number(num1[i]) * Number(num2[j]) * Math.pow(10, num1.length - i + num2.length - j - 2);
			sum += num;
		}
		res += sum;
	}
	
	
	return res + '';
};

// test('bigMultiply 1', t => {
// 	const res = bigMultiply('123', '456');
// 	t.is(res, '56088');
// });

test('bigMultiply 2', t => {
	const res = bigMultiply('123456789', '987654321');
	console.log(res);
	t.pass(res, '56088');
});