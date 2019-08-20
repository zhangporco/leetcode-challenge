const test = require('ava');

/**
 * 完成
 * Given a non negative integer number num.
 * For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 * @param {number} num
 */
const countBits = function (num) {
	const res = [];
	for (let i = 0; i <= num; i++) {
		let bit = i.toString(2);
		let sum = 0;
		const count = () => {
			const index = bit.indexOf('1');
			if (index > -1) {
				sum += 1;
				bit = bit.substring(0, index) + bit.substring(index + 1, bit.length);
				count();
			}
		};
		count();
		res.push(sum);
	}
	return res;
};

test('count bit 0', t => {
	const res = countBits(5);
	console.log(res);
	t.pass(res, [ 0, 1, 1, 2, 1, 2 ]);
});
