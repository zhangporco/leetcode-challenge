const test = require('ava');

/**
 * @desc: 最接近的三数之和
 * @author: Porco
 * @created: 2019/9/5 10:21 AM
 */
const threeSumClosest = (nums, target) => {
	nums = nums.sort((a, b) => {
		return a - b;
	});
	
	let num = nums[ 0 ] + nums[ 1 ] + nums[ 2 ];
	let and = num;
	for (let i = 0; i < nums.length - 2; i++) {
		let k = nums.length - 1;
		for (let j = i + 1; j < nums.length - 1 && j !== k;) {
			let sum = nums[ i ] + nums[ j ] + nums[ k ];
			if (Math.abs(target - sum) <= Math.abs(target - and)) {
				and = sum;
				num = Math.abs(target - sum)
			}
			if (target - sum > 0) {
				j++;
			} else {
				k--
			}
		}
	}
	return and
};

test('threeSumClosest 1', t => {
	const res = threeSumClosest([ -1, 2, 1, -4 ], 1);
	console.log(res);
	t.pass(res, false);
});