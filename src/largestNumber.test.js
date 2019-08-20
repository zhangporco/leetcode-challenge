const test = require('ava');

/**
 * 完成
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 * Note: The result may be very large, so you need to return a string instead of an integer.
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
	const array = [];
	const max = (num1, num2) => {
		const n1 = num1 + '' + num2;
		const n2 = num2 + '' + num1;
		for (let i = 0; i < n1.length; i++) {
			if (parseInt(n1.charAt(i)) > parseInt(n2.charAt(i))) {
				return true
			} else if (parseInt(n1.charAt(i)) < parseInt(n2.charAt(i))) {
				return false;
			}
		}
		return false;
	}
	let temp;
	// 冒泡排序
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			if (!max(nums[ j ], nums[ j + 1 ])) {
				temp = nums[ j ];
				nums[ j ] = nums[ j + 1 ];
				nums[ j + 1 ] = temp;
			}
		}
	}
	
	let res = '';
	for (const num of nums) {
		res += num;
	}
	return res.charAt(0) === '0' ? '0' : res;
};

test('largest number 0', t => {
	const res = largestNumber([ 3, 30, 34, 5, 9 ]);
	console.log(res);
	t.is(res, '9534330');
});

test('largest number 0', t => {
	const res = largestNumber([ 0, 0 ]);
	console.log(res);
	t.is(res, '0');
});
