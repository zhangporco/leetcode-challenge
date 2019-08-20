const test = require('ava');

/**
 * 完成
 * 一个 number 数组，有且仅有一个数是唯一的，其他的数字都会出现两次
 * 找出这个唯一数
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
	const findOnce = () => {
		if (nums && nums.length) {
			const num = nums[ nums.length - 1 ];
			nums.pop();
			const index = nums.indexOf(num);
			if (index > -1) {
				nums.splice(index, 1);
				return findOnce();
			} else {
				return num;
			}
		}
	}
	return findOnce();
};

/**
 * 完成，但是不完美
 * 一个 number 数组，有两个数是唯一的，其他的数字都会出现三次
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber2 = function (nums) {
	const findOnce = () => {
		if (nums && nums.length) {
			const num = nums[ nums.length - 1 ];
			nums.pop();
			const index = nums.indexOf(num);
			if (index > -1) {
				nums.splice(index, 1);
				const index2 = nums.indexOf(num);
				if (index > -1) {
					nums.splice(index2, 1);
					return findOnce();
				} else {
					return num;
				}
			} else {
				return num;
			}
		}
	}
	return findOnce();
};

/**
 * 完成
 * 给定一个整数数组，除了一个元素外，每个元素都会出现三次，它只出现一次。找到那一个
 * 返回它们
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber3 = function (nums) {
	const res = [];
	const findOnce = () => {
		if (nums && nums.length) {
			const num = nums[ nums.length - 1 ];
			nums.pop();
			const index = nums.indexOf(num);
			if (index > -1) {
				nums.splice(index, 1);
			} else {
				res.push(num);
			}
			findOnce();
		}
	}
	findOnce();
	return res;
};

test('single number 0', t => {
	const res = singleNumber([ 1, 1, 3, 4, 4, 5, 7, 5, 3 ]);
	t.is(res, 7);
});

test('single number 1', t => {
	const res = singleNumber3([ 1, 2, 1, 3, 2, 5 ]);
	t.is(res[ 0 ], 5);
	t.is(res[ 1 ], 3);
});

test('single number 2', t => {
	const res = singleNumber2([ 1, 2, 1, 3, 2, 2, 1 ]);
	t.is(res, 3);
});
